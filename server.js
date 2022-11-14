const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()
const{getTypes, addRestaurant, getRandomRestaurant, clearList, getRandomFastFood, getRandomSitDown, getRandomUtahFood} = require("./controller.js")


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

app.get('/html', (req, res) =>{
    res.sendFile(path.join(__dirname, "./front-end/ourChoices.html"))
})

app.get('/css2', (req, res) =>{
    res.sendFile(path.join(__dirname, './front-end/ourChoices.css'))
})

app.get('/js2', (req, res) =>{
    res.sendFile(path.join(__dirname, './front-end/ourChoices.js'))
})

app.get('/logo', (req, res) =>{
    res.sendFile(path.join(__dirname, "./logo/logo.png"))
})

app.get('/logo2', (req, res) =>{
    res.sendFile(path.join(__dirname, "./logo/logo2.png"))
})

app.get('/rick', (req, res) =>{
    res.sendFile(path.join(__dirname, "./rick/rick.mp4"))
})

app.get('/restaurant_types', getTypes)
app.post('/user_choices', addRestaurant)
app.get('/user_choices', getRandomRestaurant)
app.delete('/user_choices', clearList)
app.get('/fast_food', getRandomFastFood)
app.get('/sitdown_food', getRandomSitDown)
app.get('/utah_food', getRandomUtahFood)

const port = process.env.PORT || 4445

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})