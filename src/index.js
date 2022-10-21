const express = require("express")
const  router = require("./route/index.js")
const app = express();

app.use(express.json())

app.use("/", router)

app.use((req,res) => {
  console.log("req-res cycle finished")
})
const PORT = 2000 || 6000

app.listen(PORT,() => {
  console.log(`server is listenning on ${PORT}`)
})


