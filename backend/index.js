const express = require("express")
require("dotenv").config()
require("./dbConfig/index.config")

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "hello world"})
})

app.listen(PORT, () => {
  console.log("server running on port", PORT)
})