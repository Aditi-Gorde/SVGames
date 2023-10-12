const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const OldToken = require("../model/OldToken");

const expiredToken = asyncHandler(async(req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
   if (authHeader && authHeader.startsWith("Bearer")) {
     token = authHeader.split(".")[2];
     let flag = await OldToken.findOne({ token });
     if(flag && flag.token === token){
      res.json(401,{message:"User is not authorized"});
     }else {
     next();}
    }
});

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
      if (err) {
        res.json(401,{message:"User is not authorized"})
        //res.status(401);
        //throw new Error("User is not authorized");
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.json(501,{message:"Unauthorized: Token is missing"})
      //res.status(401);
      //throw new Error("User is not authorized or token is missing");
    }
  }
});

module.exports = {validateToken, expiredToken};   
