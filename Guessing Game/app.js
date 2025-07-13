 let max = prompt("Enter your max number");
 let random = Math.floor(Math.random()*max)+1;
 let guess = prompt("Guess the number");

 while(true){
  if(guess=="quite"){
    console.log("you quite");
    break;
  }

  if(guess==random){
    console.log("Congrats, You guess right!!",random)
    break;
  }else if(guess<random) {
     guess = prompt("Hint: Your number is small , Plz guess again large number" );
      
  }else{
    guess = prompt("Hint: Your guess number is Large, Try again small number" );
     
  }
 }
