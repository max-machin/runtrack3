window.addEventListener("DOMContentLoaded", (event) => {
    
    var footer = document.querySelector("footer")
    window.addEventListener("scroll", function() {
        var y = window.scrollY;
        console.log(y)
        if ( window.scrollY > 800){
            footer.className = "rouge"
        }
        if ( y > 1600){
            footer.className = "bleu"
        } 
        if ( y > 2400){
            footer.className = "orange"
        } 
        if ( y > 3200 ){
            footer.className = "vert"
        } 
        if ( y > 4000){
            footer.className = "jaune"
        }
    })
        

});