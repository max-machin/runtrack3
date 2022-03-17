window.addEventListener("DOMContentLoaded", (event) => {

    const obj = {name: "La Plateforme_", address: "8 rued'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}
    console.log(obj)
    const myjson = JSON.stringify(obj)
    let name = obj.name

   
    function jsonValueKey(obj, critere) {
        Object.keys(obj).forEach(function(key) {
            if ( key == critere){
                console.log(obj[key] )
                return (obj[key])
            }
          })
    }

    let critere = "address";

    jsonValueKey(obj, critere);
});