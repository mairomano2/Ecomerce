const mongoose= require("mongoose");
const usersCollection = "users";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    requiered: true,
  },
  shopName: {
    type: String,
    unique: true,
    requierd: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, href: "products" }],
  orders: {
    type: Array,
  },
});

const UserModel = mongoose.model(usersCollection, UserSchema);

module.exports = UserModel;
