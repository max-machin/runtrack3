window.addEventListener("DOMContentLoaded", (event) => {

    var getbutton = document.getElementById("button");
    var art = document.getElementById("article");

    function showhide(){
       if ( art.style.display != "block"){
           art.style.display = "block";
       } 
       else if ( art.style.display == "block") {
            art.style.display = "none";
       }    
    }
    getbutton.onclick = showhide;
  });