window.addEventListener("DOMContentLoaded", (event) => {

    if (window.fetch) {
        let table = [];
        let table_list = [];
        let liste = fetch("pokemon.json")
        .then(response => response.json())
        .then(response => { 

            // let array1 = ['a', 'b', 'c']
            // let array2 = ['c', 'c', 'd', 'e']

            // let array3 = array1.concat(array2)
            // let test = new Set(array3)
            // array3 = [... new Set([...array1, array2])]
             Object.keys(response).forEach(function(key) {
           
                 let type = response[key].type
                 table.push(type)
                
                
                 for (let index = 0; index < table[key].length; index++) {

                    let result = table[key][index]
           
                        table_list.push(result)                             
                 } 

             }),
             final_list = [...new Set(table_list)]
            console.log(final_list)
      
          }  )
        .catch(error => alert("Erreur : " + error));
        

        
    
    } else {
        
    }
    



});