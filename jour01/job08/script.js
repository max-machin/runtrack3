var petit = 5;
var grand = 7;


function sommenombrepremiers(petit, grand){

    function isPrime(n) 
    {
        // Si le nombre est supérieur à 2
        if (n<2) return false;

        // 
        for (let i = 2; i < n; i++){
            // Si i est un diviseur de n alors n n'est pas premier
            if (n % i == 0){
            return false; 
            } else {
                return n;
            }
        } 
    }

    if ( isPrime(petit) !== false && isPrime(grand) !== false)
    {
        console.log(petit + grand);
    } else {
        console.log("false");
    }
}

sommenombrepremiers(petit, grand);