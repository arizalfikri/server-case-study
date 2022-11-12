const Controller = require("../controller");

const express = require("express");
const router = express.Router();

router.post("/sign-in", Controller.SignIn);
router.post("/sign-up", Controller.SignUp);
router.post("/social-media-sign", Controller.SocialMediaSign);

module.exports = router;
