window.addEventListener("DOMContentLoaded", (event) => {

    const obj = {name: "La Plateforme_", address: "8 rued'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}
    console.log(obj)
    const myjson = JSON.stringify(obj)
    let name = obj.name

   Object.keys(obj).forEach(function(key) {
    if ( key == "name"){
        console.log(obj[key])
    }
  })
    function jsonValueKey(obj, key) {
        
    }
});