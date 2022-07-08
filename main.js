
let button = document.querySelector("button");

function buttonClickTest() {
    axios.get("https://swapi.dev/api/planets?search=alderaan").then(resp=> {
        let alderaanResidenceObj = resp.data.results[0].residents
        // console.log(alderaanResidenceObj)
        for(i = 0; i < alderaanResidenceObj.length; i++) {
            axios.get(alderaanResidenceObj[i]).then(getResResp => {
                let personObject=getResResp.data
                // console.log(personObject)
                //create h2 element with person name attached
                let newElement = document.createElement('h2')
                newElement.innerHTML = personObject.name
                document.body.append(newElement)
            })
        }
    })
}
    
button.addEventListener("click", buttonClickTest);
