const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//**adding middleware using use() method */
// app.use('/',(req, res, next) =>{
//     res.send('<h1>Hello Express</h1>')
//     next();
// })
app.use('/admin',adminRoutes)
app.use('/shop',shopRouter)

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
    
})

app.listen(3000)
