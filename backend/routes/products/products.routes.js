const { Router } = require("express")
const ProductsController = require("../../controllers/products.controller")

const router = Router()

router.get("/", async () => {
  const data = await ProductsController.get()
  console.log(data)
})

module.exports = router