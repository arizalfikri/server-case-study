const { getDatabase } = require("../config");
const { ObjectId } = require("mongodb");

class User {
  static async users() {
    const db = getDatabase();
    const users = db.collection("User");
    return users;
  }

  static async findByPK(_id) {
    try {
      const users = await this.users();
      return await users.finOne({
        _id: ObjectId(_id),
      });
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const users = await this.users();
      return await users.insertOne(user);
    } catch (error) {
      throw error;
    }
  }

  static async findOne(email) {
    try {
      const users = await this.users();
      const result = await users.findOne({
        email,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
