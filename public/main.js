console.log("hi")

let createForm = document.querySelector("#create-form");
let createName = document.querySelector("#create-name-input");
let createPower = document.querySelector("#create-power-input");
let createHealth = document.querySelector("#create-health-input");

createForm.addEventListener(('submit'), (event) => {
    event.preventDefault()

    if (isNaN(+createPower.value)) {
        alert('put a number in for your power')
        return
    }

    if (isNaN(+createHealth.value)) {
        alert('put a number in for your health')
        return
    }

    let myBody = {
        name: createName.value,
        power: createPower.value,
        health: createHealth.value
    }

    axios.post('/create-fighter', myBody)
    .then ((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    
})