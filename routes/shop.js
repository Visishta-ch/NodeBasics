const express = require('express')

const router = express.Router();

router.get('/sp',(req,res,next)=>{
    res.send('<h1>Welcome Express Shopping page<h1/>')
})

module.exports = router;