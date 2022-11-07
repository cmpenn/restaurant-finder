const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const{getTypes, addRestaurant} = require('./controller.js')

app.use(express.json())

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "./front-end/homepage.html"))
})

app.get('/css', (req, res) =>{
    res.sendFile(path.join(__dirname, "./front-end/styles.css"))
})

app.get('/js', (req, res) =>{
    res.sendFile(path.join(__dirname, "./front-end/index.js"))
})

app.get('/restaurant_types', getTypes)
app.post('/user_choices', addRestaurant)

const port = process.env.PORT || 4445

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})