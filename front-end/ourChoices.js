const getFastFood = document.querySelector('#fast-btn')
const getSitDown = document.querySelector('#sit-btn')
const getFancyFood = document.querySelector('#fancy-foods')
const getRestaurant = document.querySelector('#get-restaurant')
const btnSection = document.querySelector('#button-section')

function getRandomFastFood(){
    axios.get('./fast_food')
    .then((res) =>{
        console.log(res)
        let restaurant = res.data
        console.log(restaurant)
        getRestaurant.style.display = 'block'
        getRestaurant.innerHTML =
        `<p>Your restaurant is ${restaurant}!</p>` +
        `<div><a href="/rick"><button id="spin-again">Try Again?</button></a></div>
        <div><a href="https://www.google.com/maps/search/${restaurant}"><button id="direction">Directions</button></a></div>
        <div><a id="back" href="/html">Back</a></div>`
        getFastFood.classList.add('hide')
        getFancyFood.classList.add('hide')
        getSitDown.classList.add('hide')
    })
    .catch(err =>{
        console.log(err)
        res.status(204).send(err)
    })  
}

function getRandomSitDown(){
    axios.get('./sitdown_food')
    .then((res) =>{
        console.log(res)
        let restaurant = res.data
        console.log(restaurant)
        getRestaurant.style.display = 'block'
        getRestaurant.innerHTML =
        `<p>Your restaurant is ${restaurant}!</p>` +
        `<div><a href="rick"><button id="spin-again">Try Again?</button></a></div>
        <div><a href="https://www.google.com/maps/search/${restaurant}"><button id="direction">Directions</button></a></div>
        <div><a id="back" href="/html">Back</a></div>`
        getFastFood.classList.add('hide')
        getFancyFood.classList.add('hide')
        getSitDown.classList.add('hide')
    })
    .catch(err =>{
        console.log(err)
        res.status(204).send(err)
    })  
}

function getRandomUtahFood(){
    axios.get('./utah_food')
    .then((res) =>{
        console.log(res)
        let restaurant = res.data
        console.log(restaurant)
        getRestaurant.style.display = 'block'
        getRestaurant.innerHTML =
        `<p>Your restaurant is ${restaurant}!</p>` +
        `<div><a href="/rick"><button id="spin-again">Try Again?</button></a></div>
        <div><a href="https://www.google.com/maps/search/${restaurant}"><button id="direction">Directions</button></a></div>
        <div><a id="back" href="/html">Back</a></div>`
        getFastFood.classList.add('hide')
        getFancyFood.classList.add('hide')
        getSitDown.classList.add('hide')
    })
    .catch(err =>{
        console.log(err)
        res.status(204).send(err)
    })  
}

getFastFood.addEventListener('click', getRandomFastFood)
getSitDown.addEventListener('click', getRandomSitDown)
getFancyFood.addEventListener('click', getRandomUtahFood)