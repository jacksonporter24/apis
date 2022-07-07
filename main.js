let button = document.querySelector("button")

function buttonClick(axios) {
    axios.get('https://swapi.dev/api/planets?search=alderaan').then(resp => {
        for(i = 0; i < residents.length; i++) {
            axios.get(residents[i]).then(resp => {
                let newElement = document.createElement('h2')
                newElement.innerHTML = `residents[i]`
                document.getElementById("body").appendChild(newElement)
            })
        }
    })
}

button.addEventListener('click', buttonClick)