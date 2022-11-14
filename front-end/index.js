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
}

function getRandomRestaurant(){
    axios.get('./user_choices')
    .then((res) =>{
        console.log(res)
        let restaurant = res.data
        console.log(restaurant)

        if(restaurant < 1){
            alert('There are no restaurants in you list! Add some!')
            return
        }else{
            getRestaurant.innerHTML =
            'Your restaurant is ' + restaurant + '!' +
            `<div><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><button id="spin-again">Try Again?</button></a><a href="https://www.google.com/maps/search/${restaurant}"><button id="direction">Directions</button></a></div>
            <div><a id="back" href="/">Back</a></div>`
        }
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