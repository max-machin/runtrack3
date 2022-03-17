window.addEventListener("DOMContentLoaded", (event) => {

    if (window.fetch) {
        let table = [];
    
        let liste = fetch("pokemon.json")
        .then(response => response.json())
        .then(response => 
            Object.keys(response).forEach(function(key) {
                
                console.log(response[key].type)
            
          })
          )
        .catch(error => alert("Erreur : " + error));
        

        
    
    } else {
        
    }
    



});