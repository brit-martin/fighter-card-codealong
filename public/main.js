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
        loadFightersToDom(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    
})

axios.get('/fighters')
.then((result) => {
    loadFightersToDom(result.data)
})
.catch((error) => {
    console.log(error)
})

function loadFightersToDom(fightersArray){
    //start with a clean slate: wipe all fighters out of the DOM before we put new ones in
    document.querySelector('#fighters-display').innerHTML = ''

for (let i=0; i < fightersArray.length; i++){

    let fighterCard = document.createElement('div');
    let fighterName = document.createElement('h3');
    let fighterPower = document.createElement('p');
    let fighterHealth = document.createElement('p');

fighterCard.appendChild(fighterName)
fighterCard.appendChild(fighterPower)
fighterCard.appendChild(fighterHealth)


fighterName.innerHTML = fightersArray[i].name
fighterPower.innerHTML = 'Power: ' + fightersArray[i].power
fighterHealth.innerHTML = 'Health: ' + fightersArray[i].health

document.querySelector('#fighters-display').appendChild(fighterCard);
}

}
 
//----------------------delete a fighter 

let deleteForm = document.querySelector('#delete-form')
let deleteFighter = document.querySelector('#remove')

deleteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = deleteFighter.value
   
    console.log("hello")

    axios.delete(`/delete-fighter?name=${name}`)
    .then ((result) => {
       loadFightersToDom(result.data)
    })
    .catch((error) => {
        console.log(error)
    })



    })
