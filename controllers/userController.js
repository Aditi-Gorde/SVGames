// require('dotenv').config();

const crypto = require('crypto-js');

const asyncHandler = require("express-async-handler");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

const OldToken = require("../model/OldToken");

const decrypt_key = "6Le6ZpMlAAAAAFyL-GFTo2UZykHJ5mpbQmWgOnls";

const access_token = "onetrade123"


// const transporter = nodemailer.createTransport({
//   service: "gmail",

//   auth: {
//     user: process.env.EMAIL_ADDRESS,

//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

//@desc Register a new user

//@route POST /api/users/signup

//@access public

const signupUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, phonenumber, password, confirmPassword } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !phonenumber ||
    !password ||
    !confirmPassword
  ) {
    res.json(412, { message: "One or more of the required fields are empty" }); //res.status(400); //throw new Error("All fields are mandatory!");
  }
  
  const decrypted_pass = crypto.AES.decrypt(
    password,
    decrypt_key
  ).toString(crypto.enc.Utf8);
  const decrypted_confirm_pass = crypto.AES.decrypt(
    confirmPassword,
    decrypt_key
  ).toString(crypto.enc.Utf8);

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.json(706, { message: "Mail-id already exists" }); //res.status(400); //throw new Error("User already exists!");
  }

  const numAvailable = await User.findOne({ phonenumber });

  if (numAvailable) {
    res.json(707, { message: "Mobile number already exists" }); //res.status(400); //throw new Error("Account with phone number exists!");
  }

  if (decrypted_pass !== decrypted_confirm_pass) {
    res.json(601, { message: "Password Mismatch" });
  } //Hash password

  const hashedPassword = await bcrypt.hash(decrypted_pass, 10);


  const user = await User.create({
    firstname,

    lastname,

    email,

    phonenumber,

    password: hashedPassword,
  });


  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  } else {
    res.json(105, { message: "User data is not valid" }); //res.status(400); //throw new Error("User data is not valid");
  }

  res.json({ message: "Register the user" });
});

//@desc Login user

//@route POST /api/users/login

//@access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json(412, { message: "One or more of the required fields are empty" }); //res.status(400); //throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email }); //compare password with hashedpassword

  const decrypt_password = crypto.AES.decrypt(
    password,
    decrypt_key
  ).toString(crypto.enc.Utf8);

  if (user && (await bcrypt.compare(decrypt_password, user.password))) {
    var accessToken = jwt.sign(
      {
        user: {
          firstname: user.firstname,

          email: user.email,

          id: user.id,
        },
      },

      access_token,

      { expiresIn: "2h" }
    );

    //console.log("Login Succesful");

    res.status(200).json({ accessToken });
  } else {
    res.json(403, { message: "Email or Password is not valid" }); //res.status(401); //throw new Error("email or password is not valid");
  }
});

//@desc Current user info

//@route POST /api/users/current

//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const logoutUser = asyncHandler(async (req, res) => {
  //let authHeader = req.headers.authorization;

  const token = req.body.token;
  //console.log("received: ",token);
  // if (authHeader && authHeader.startsWith("Bearer")) {
  //   var tkn = authHeader.split(".")[2];
  // }
  var tkn = token.split(".")[2];
  await OldToken.create({
    token: tkn,
  });

  res.json({ success: true, message: "logged out successfully" });
});



module.exports = {
  signupUser,

  loginUser,

  currentUser,

  logoutUser,

};
