function fizzbuzz(){
    for (var i = 0; i <= 151; i++){
       console.log(i);
       if ( i % 3 === 0 )
       {
           console.log("Fizz");
       } if ( i % 5 === 0){
           console.log("Buzz");
       } if ( i % 3 === 0 && i % 5 === 0){
           console.log("FizzBuzz");
       }
    }
}

fizzbuzz();