const User = require("../model/user");

class Controller {
  static async SignIn(req, res) {
    try {
      const response = await User.findOne(req.body);
      res.status(200).json({
        response,
      });
    } catch (error) {
      res.status().json({
        message: error,
      });
    }
  }

  static async SignUp(req, res) {
    try {
      const { response } = await User.create(req.body);
      res.status(201).json({
        response,
      });
    } catch (error) {
      res.status().json({
        message: error,
      });
    }
  }
}

module.exports = Controller;
