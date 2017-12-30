const secret = "Thegreatsecret"
const jwt = require("jsonwebtoken");
const createGravatarUrl = require("./createGravatar");

function createToken(user) {
  let scope;

  if (user.admin) {
    scope = "admin";
  }

  return jwt.sign(
    {
      sub: user.id,
      username: user.username,
      gravatar: createGravatarUrl(user.username),
      scope
    },
    secret,
    {
      algorithm: "HS256",
      expiresIn: "1h"
    }
  );
}

module.exports = createToken;
