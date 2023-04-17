const express = require("express")
const app = express()
require("dotenv").config()



const port = process.env.PORT

const http = require("http").Server(app)
const io = require("socket.io")(http)

const web = require("./routes/web")
const apis = require("./routes/apis")
const socket = require("./socket/socket")



web(app,express)
apis(app)
socket(io)


http.listen(port, ()=>{
    console.log("server is working")
})