const express = require('express')
const path = require('path')
require('dotenv').config()
const upload = require('./config/multer')
const app = express()

app.set('view engine' , 'html')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'uploads')))

app.get('/' , (req , res) => res.render('index'))

app.post('/upload' , upload.single('image') , async (req , res) => {
    return res.status(200).json({
        url: `${process.env.BASE_URL}/uploads/${req.file.originalName}`
    })
})

const port = process.env.PORT || 3000
app.listen(
    port , 
    () => console.log(`http://localhost:${port}/`)
)