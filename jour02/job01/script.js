window.addEventListener("DOMContentLoaded", (event) => {

    function citation() {
        var getbutton = document.getElementById("button");
        let citation = document.getElementById("citation");

        getbutton.addEventListener('click', function(){
          getbutton.onclick = console.log(citation) ; 
        })
        
    }

    citation();
  });