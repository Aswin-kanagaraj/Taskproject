const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  User.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Some error occurred while Post",
      });
    });
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { useremail, password } = req.body;
  const user = await User.findOne({ useremail }).select("+password");
  // console.log(req.body);
  if (!user || !(await user.isValidPassword(password))) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  req.session.userId = user._id.toString();
  req.session.useremail = user.useremail;
  req.session.isLoggedIn = true;
  req.session.save((err) => {
    if (err) {
      console.error("Error saving session:", err);
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({
        success: true,
        message: "Loggedin",
      });
    }
  });
});

exports.logoutUser = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  });
};

