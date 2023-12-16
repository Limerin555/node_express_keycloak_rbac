const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Decode access token
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const tokenData = jwt.decode(token[1]);

    // Store decoded token data in request
    req.tokenData = tokenData;

    next();
  } catch (error) {
    next(error);
  }
}