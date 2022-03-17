$(document).ready(function () {

    let but = $("#button");
    let melangees = $("#melangees");
    let rangees = $("#rangees");
    let img = $("img");

    
    
    $("#button").click(function(){
        let shuffle = melangees[0];

        for ( let i = 0; i <= shuffle.children.length; i++ ){
            shuffle.appendChild(shuffle.children[Math.random() * i | 0]); 
        }
        console.log(shuffle);
        
    })

    $(img).click(function(){ 
        let src = $(this).attr("src");
        console.log(src)
        let contain = $("#rangees");
        img.src = $(this).src;
        img.appendTo(contain);
        // console.log(contain);
    })
    // but.addEventListener("click",shuffle);

        
        

    
});