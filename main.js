
let button = document.querySelector("button");
// let axios = require("axios");

function buttonClickTest() {
    axios.get("https://swapi.dev/api/planets?search=alderaan").then(resp=> {
        let alderaanResidenceObj = resp.data.results[0].residents
        console.log(alderaanResidenceObj)
        for(i = 0; i < alderaanResidenceObj.length; i++) {
            axios.get(alderaanResidenceObj[i]).then(getResResp => {
                let personObject=getResResp.data
                console.log(personObject)
                //create h2 element with person name attached
                let newElement = document.createElement('h2')
                newElement.innerHTML = personObject.name
                document.body.append(newElement)
            })
        }
    })}
    // console.log("Button has been clicked.");


button.addEventListener("click", buttonClickTest);


// function buttonClick() {
//     // console.log("Buttoned Clicked");
//     axios.get('https://swapi.dev/api/planets?search=alderaan', {}).then(resp => {
//     console.log("I hate this")    
//     for(i = 0; i < resp.residents.length; i++) {
//             axios.get(resp.residents[i]).then(getResResp => {
//                 console.log("I am stupid.")
//                 let newElement = document.createElement('h2')
//                 newElement.innerHTML = getResResp.body.name
//                 document.getElementById("body").appendChild(newElement)
//             })
//         }
//     })

// }

// let users = [user1, user2, user3...]

// app.put('/api/users/:username', (req, res) => {
//     let existingUsername  = req.params.username
//     let newUsername = req.body.username
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].username === existingUsername) {
//         user[i].username = newUsername
//         res.status(200).send("User updated.")
//         return
//       }
//     }
//     res.status(400).send("User not found.")
//   })