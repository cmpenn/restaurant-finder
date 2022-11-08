const form = document.querySelector('form')
const restaurantInput = document.querySelector('#restaurant-input')
const typeSelect = document.querySelector('#type')
const typeList = document.querySelector('#type-list')

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

function addRestaurant(){
    

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
    .then(res =>{
        typeSelect.value = 1
        restaurantInput.value = ''
        document.querySelector().checked = true
    })
}

getTypes()
form.addEventListener('submit', addRestaurant)