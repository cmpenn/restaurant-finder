const form = document.querySelector('form')
const restaurantInput = document.querySelector('#restaurant-input')
const typeSelect = document.querySelector('#type')
const typeList = document.querySelector('#type-list')
const getRestaurant = document.querySelector('#get-restaurant')
const getButton = document.querySelector('#get-btn')

function getTypes(){
    axios.get('./restaurant_types')
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

    axios.post('./user_choices', body)
    .then(() =>{
        typeSelect.value = 1
        restaurantInput.value = ''
        document.querySelector('#rating-one').checked = true
    })
    .catch(err =>{
        console.log(err)
        res.status(400).send('resturant not added')
    })
}

function getRandomRestaurant(){
    axios.get('./user_choices')
    .then((res) =>{
        console.log(res)
        let restaurant = res.data
        console.log(restaurant)
        getRestaurant.innerHTML = restaurant
        getButton.classList.add('hide')
    })
    .catch(err =>{
        console.log(err)
        res.status(204).send(err)
    })
}

window.addEventListener("beforeunload", function clearList(e){
    axios.delete('./user_choices')
 }, false);

getTypes()
form.addEventListener('submit', addRestaurant)
getButton.addEventListener('click', getRandomRestaurant)