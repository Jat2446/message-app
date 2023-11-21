// const http = require('http')
// const routes = require('./route')
const express = require('express')
// console.log(routes.someText)
const app = express();
app.use((req,res,next) => {
    console.log("i am middleware")
    next();
})
app.use((req,res,next) => {
    console.log("I am another midleware")
    res.send("<h1> hello from express !</h1>")
})
// const server = http.createServer(app)
app.listen(5000);