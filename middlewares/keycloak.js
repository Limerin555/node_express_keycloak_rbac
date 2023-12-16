const Keycloak = require("keycloak-connect");
const dotenv = require('dotenv').config();

const config = {
  "realm": process.env.KEYCLOAK_REALM,
  "auth-server-url": `${process.env.KEYCLOAK_URL}`,
  "ssl-required": "external",
  "resource": process.env.KEYCLOAK_CLIENT,
  "bearer-only": true
}

module.exports = new Keycloak({}, config);