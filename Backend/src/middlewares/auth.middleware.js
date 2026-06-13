const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "unAuthorized",
      });
    }
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "JWT_SECRET not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = { authUser };
