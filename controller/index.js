const User = require("../model/user");

class Controller {
  static async SignIn(req, res) {
    try {
      const { email, password } = req.body;
      const response = await User.findOne(email);
      if (password !== response.password)
        throw { message: "invalid email/password" };

      res.status(200).json({
        response,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  static async SignUp(req, res) {
    try {
      const response = await User.create(req.body);
      res.status(201).json({
        response,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  static async SocialMediaSign(req, res) {
    try {
      const { email } = req.body;
      const response = await User.findOne(email);

      if (response)
        res.status(200).json({
          response,
        });
      else {
        const result = await User.create();
        res.status(201).json({
          response: result,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = Controller;
