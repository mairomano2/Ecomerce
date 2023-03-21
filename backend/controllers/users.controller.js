const UsersMongoQuerys = require("../querys/users.querys")

const usersMongoQuerys = new UsersMongoQuerys()

class UsersController {
  static async getById(req, res, next) {
    const { shopName } = req.params
    try {
      console.log(shopName)
      const user = await usersMongoQuerys.getById(shopName);
      if (!user) {
        res.status(404).json({ success: false, description: "user not found" });
      } else {
        res.status(200).json({ success: true, payload: user });
      }
    } catch (error) {
      next(error);
    }
  }

  static async saveUser(req, res, next) {
    const newUser = req.body;
    try {
      const data = await usersMongoQuerys.saveUser(newUser)
      res.status(200).json({ success: true, payload: data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
