window.addEventListener("DOMContentLoaded", (event) => {

    const obj = {name: "La Plateforme_", address: "8 rued'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}
    
    let critere = "name";
   
    function jsonValueKey(obj, key) {
    
        if ( obj[key] != undefined ) {
            console.log(obj[key])
        }
    }

    

    jsonValueKey(obj, critere);
});