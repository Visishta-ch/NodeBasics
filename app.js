const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//**adding middleware using use() method */
// app.use('/',(req, res, next) =>{
//     // console.log('first middleware, running all time')
//     next()
// })


app.use('/add-product',(req, res, next)=>{
    console.log('in the middleware')
    res.send('<h1>Add Product</h1> <br/> <form action="/product" method="post"><input type="text"  name="firstName" placeholder="Input" /> <input type="text"  name="size" placeholder="Size" /> <button type="submit">Submit</button></form>')
    //  next();
})
app.use('/product',(req, res, next)=>{
    console.log(req.body)

    res.redirect('/')
})

app.use((req, res, next)=>{
    // console.log('another middleware')
    // res.send(`{ key1: value }`)
    res.send('<h1>Hello from Express</h1>')
})
const server = http.createServer(app)
// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

server.listen(3000);
