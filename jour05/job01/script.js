window.addEventListener("DOMContentLoaded", (event) => {
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let form = document.querySelector("form");
    let p = document.querySelectorAll("p");

    console.log(nom);

    nom.addEventListener("keyup", function() {

        if (this.value.length ==  '') {
            p[0].innerHTML = "Veuillez renseignez ce champ";
        } else {
            p[0].innerHTML = "" ; 
        }
    });
   
    email.addEventListener("focusout", function() {

        var data = new FormData(form);
        data.append('nom', nom.value)
        fetch('traitement.php', {
            method: "POST",
            body: data
        })
        .then((response) => response.json())
        .then(function data(response){
            console.log(response);
            if(response === false )
            p[0].innerHTML = "test l31"
        })
    });

    prenom.addEventListener("keyup", function() {
      

        if (this.value.length == '') {
            p[1].innerHTML = "Veuillez renseignez ce champ";
        } else {
            p[1].innerHTML = "";
        }
    });


});