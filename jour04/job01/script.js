window.addEventListener("DOMContentLoaded", (event) => {

if (window.fetch) {
    let button = document.getElementById('button');
    let content = document.getElementById('content');

    let p;
    button.addEventListener("click", () =>{
        content.innerHTML = p;
    })

    let expression = fetch("expression.txt")
    .then(response => response.text())
    .then(response => p = response)
    .catch(error => alert("Erreur : " + error));
    

} else {
    
}

});