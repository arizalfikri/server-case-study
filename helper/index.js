"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;

function hasPassword(pass) {
  return bcrypt.hashSync(pass, 8);
}

function verifyPassword(newPass, oldPass) {
  return bcrypt.compare(newPass, oldPass);
}

function toToken(payload) {
  return jwt.sign(payload, key);
}

function verifyToken(token) {
  return jwt.verify(token, key);
}

module.exports = {
  hasPassword,
  verifyPassword,
  toToken,
  verifyToken,
};
