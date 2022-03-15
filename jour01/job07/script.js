
var date = new Date("january-1-2020");

var options = {month: 'long'}
var mois = new Intl.DateTimeFormat('fr', options).format(date);


var ferier = new Array()

function jourtravaille(date){
    var annee = date.getFullYear();
    var day = date.getDate();
    var jour = date.getDay();
    console.log(jour);
    

    console.log(date);
    if ( jour === 0 || jour === 6){
        console.log("Non le "+day+" "+mois+" "+annee+" est un week-end");
        
    } else {
        date = ""+day+" "+mois+" "+annee+"";
        var ferier = new Array("1 janvier 2020" , "13 avril 2020" , "1 mai 2020" , "8 mai 2020", "21 mai 2020", "1 juin 2020", "14 juillet 2020", "15 aout 2020", "1 novembre 2020", "11 novembre 2020", "25 decembre 2020");
        for(var i = 0; i < ferier.length; i++){
            if (ferier.indexOf(date) !== -1){
                console.log("Non le "+date+" est un férié");
            } else {
                console.log("Non le "+date+" est un jour travaillé");
            }
        }
    }
}

jourtravaille(date);