const sendToken = (user, statusCode, res,req) => {
  const accessToken = user.getJwtToken();
  const refreshToken = user.getRefreshToken();
  const tokenOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),  
  };
  
  const userOptions = {
    expires: new Date(Date.now() + 1 * 60 * 1000),
  };

    const sessionOptions = {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
      sameSite: "strict",
    };
  
  const response = {
    success: true,
    session_id: req.session.id,
    token: { accessToken, refreshToken },
    user: {
      id: req.session.userId,
      role: req.session.role,
      userTypeId: req.session.userTypeId,
    },
  };


  const tokenCookieValue = accessToken;
  const sessionCookieValue = req.session.id;
  // const userCookieValue = role;
  // const useruserIdCookieValue = userId;
  // const useruserTypeIdCookieValue = userTypeId;
  res
    .status(statusCode)
    .cookie("accessToken", tokenCookieValue, tokenOptions)
    // .cookie("sessionId", userOptions, sessionOptions)
    // .cookie("userId", useruserIdCookieValue, userOptions )
    // .cookie("userRole", userCookieValue, userOptions)
    // .cookie("userTypeId", useruserTypeIdCookieValue, userOptions)
    .json(response);
};

module.exports = sendToken;
