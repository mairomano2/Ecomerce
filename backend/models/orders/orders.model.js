const { Schema, model } = requiere("mongoose");
const ordersCollection = "orders";

const ordersSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  products: [{ type: Schema.Types.ObjectId, href: "products" }],
});

const OrdersModel = model(ordersCollection, ordersSchema);

module.exports = OrdersModel;
