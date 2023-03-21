const { Router } = require("express")
const UsersController = require("../../controllers/users.controller")

const router = Router()

router.get("/:shopName", UsersController.getById)
router.post("/", UsersController.saveUser)

module.exports = router