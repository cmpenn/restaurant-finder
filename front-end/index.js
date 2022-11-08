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

getTypes()