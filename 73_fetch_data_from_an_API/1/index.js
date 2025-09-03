

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
