const express = require("express")
require("dotenv").config()
// const { Router } = require("express")
const apiRouter = require("./routes/apiRouter")
require("./dbConfig/index.config")
const PORT = process.env.PORT
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// const router = Router()
app.use("/api", apiRouter)

// start server
app.listen(PORT, () => {
  console.log("server running on port", PORT)
})