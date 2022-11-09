const form = document.querySelector('form')
const restaurantInput = document.querySelector('#restaurant-input')
const typeSelect = document.querySelector('#type')
const typeList = document.querySelector('#type-list')
const getRestaurant = document.querySelector('#get-restaurant')
const getButton = document.querySelector('#get-btn')

function getTypes(){
    axios.get('http://localhost:4445/restaurant_types')
    .then(res =>{
        res.data.forEach(type => {
            const option = document.createElement('option')
            option.setAttribute('value', type['type_id'])
            option.textContent = type.type
            typeSelect.appendChild(option)
        })
    })
}

function addRestaurant(e){
    e.preventDefault()

    if(restaurantInput.value < 1){
        alert('You must enter a restaurant')
        return
    }

    let rating = document.querySelector('input[name="rating"]:checked').value
    let body ={
        name: restaurantInput.value,
        typeId: +typeSelect.value,
        rating: +rating
    }

    axios.post('http://localhost:4445/user_choices', body)
    .then(() =>{
        typeSelect.value = 1
        restaurantInput.value = ''
        document.querySelector('#rating-one').checked = true
    })
}

function getRandomRestaurant(){
    axios.get('http://localhost:4445/user_choices')
    .then((res) =>{
       let restaurants = res.data
       let randomRest = Math.floor(Math.random() * restaurants.name.length) 
       getRestaurant.innerHTML(randomRest)
    })
}

getTypes()
form.addEventListener('submit', addRestaurant)
getButton.addEventListener('click', getRandomRestaurant)