const UserModel = require("../models/users/users.models");

class UsersMongoQuerys {
  async getById( shopName ) {
    const user = await UserModel.findOne({ shopName: shopName});
    return user;
  }

  async saveUser(newUser) {
    const user = await UserModel.create(newUser);
    return user;
  }
}

module.exports = UsersMongoQuerys;
