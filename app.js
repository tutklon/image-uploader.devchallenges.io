const express = require('express')
const path = require('path')
require('dotenv').config()
var app = express()

app.set('view engine' , 'pug')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/' , (req , res) => {
    res.render("index")
})

const port = process.env.PORT || 3000
app.listen(
    port , 
    () => console.log(`http://localhost:${port}/`)
)