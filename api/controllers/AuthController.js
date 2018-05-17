const jwt = require('jsonwebtoken');
const config = require('../../config/env');
// Authenticate any user
// The request should be in this form
// req.body: {
//   username: "dhruv",
//   password: "dhruv"
// }
function authenticate(req, res, next) {
  if (req.body.username && req.body.password) {
    // Match the username and password with the Database User
    req.dbUser = req.body;
    next();
  } else {
    // If the username or password is missing
    const err = new Error('Wrong username or password');
    err.status = 401;
    next(err);
  }
}
// Generate a signed JWT with username as payload
async function generateJWT(req, res, next) {
  const jwtPayload = { username: req.dbUser.username };
  const jwtSecret = config.jwt.jwtSecret;
  const jwtData = { expiresIn: config.jwt.jwtDuration };
  req.token = jwt.sign(jwtPayload, jwtSecret, jwtData);
  next();
}

// Return the JWT as response
function returnJWT(req, res) {
  res.status(201).json({ token: req.token });
}


module.exports = {
  authenticate, generateJWT, returnJWT,
};
