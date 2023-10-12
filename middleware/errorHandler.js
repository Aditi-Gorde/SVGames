const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.INVALID_EMAIL:
      res.json({
        title: "Invalid email-id",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.MISSING_FIELDS:
      res.json({
        title: "Missing Fields",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.USER_DATA_NOT_VALID:
      res.json({
        title: "User Data Not valid",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.PHONE_NUMBER_EXISTS:
      res.json({
        title: "Phone Number Already Exists",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.EMAIL_EXISTS:
      res.json({
        title: "Email already exists",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.TOKEN_MISSING:
      res.json({
        title: "Tokens missing",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.PASSWORD_MISMATCH:
      res.json({
        title: "Passwords does not match",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    case constants.INVALID_TRANSACTION:
      res.json({
        title: "Invalid Transaction",
        message: err.message,
        stackTrace: err.stack,
      }); break;
    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;
