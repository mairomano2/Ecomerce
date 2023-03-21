const { Schema, model } = requiere("mongoose");
const productsCollection = "products"

const ProductsSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  category: {
    type: String
  },
  description: {
    type: String,
  },
  img: {
    type: String
  }
})

const ProductsModel = model(productsCollection, ProductsSchema)

module.exports = ProductsModel