const express = require('express')

const router = express.Router()

router.get('/add-product',(req, res, next)=>{
    console.log('in the middleware')
    res.send('<h1>Add Product</h1> <br/> <form action="/admin/add-product" method="post"><input type="text"  name="firstName" placeholder="Input" /> <input type="text"  name="size" placeholder="Size" /> <button type="submit">Submit</button></form>')
    //  next();
})
router.post('/add-product',(req, res, next)=>{
    console.log(req.body)

    res.redirect('/shop/sp')
})

module.exports = router;