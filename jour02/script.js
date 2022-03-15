window.addEventListener("DOMContentLoaded", (event) => {
    var getbutton = document.getElementById("button");
    var compteur = document.getElementById("compteur");

    function addone(){
        getbutton.addEventListener('click', event =>{
            compteur.innerHTML++;
        });
    }
    addone();
});