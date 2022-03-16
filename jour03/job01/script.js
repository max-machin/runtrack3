window.addEventListener("DOMContentLoaded", (event) => {
    
    let p = document.querySelector("p");
    p.style.display = "none";

    $("#button").click(function(){
        $("p").show();
    });
        
    $("#hidden").click(function(){
        $("p").hide()
    });

});