
"use strict"; { 
// START OF startGame function 

function startGame(playing) { 
        playing = prompt("Do you want to play?");
        if (playing.toLowerCase() === "yes") {
        let userName = prompt("What is your name?"); 
          startCombat(userName, playing); 
        } else {
          console.log("Ok, whatever."); 
        } 
      } 

// START OF getDamage function  

  const getDamage = function() {
       return Math.floor(Math.random() * 5) +1; 
      }

//START of startCombat function 

  function startCombat(userName, playing) {
          let userDamage = getDamage(); 
          let grantDamage = getDamage(); 
          let userHealth = 40;
          let grantHealth = 10;
          let wins = 0; 
          
      while (playing) {
          let choice = prompt("Choose attack or quit."); 

          if (choice === "attack") {
          userHealth -= grantDamage; 
          console.log(`Your health is at ${userHealth} you recieved ${grantDamage} damage.`); 
          grantHealth -= userDamage; 
          console.log(`Grant's health is at ${grantHealth}. Grant recieved ${userDamage}.
          `); 
          
          if (grantHealth <= 0) {
            wins ++;           // ++ increment, like i++ ; 
            grantHealth = 10;
            console.log(`Grant is defeated and ${userName} wins with ${wins} wins !`); 
          }
          } if (wins === 3){
              console.log("You win!");
              break; 
          } else if (choice === "quit"){
              console.log("See ya later!"); 
              break; 
          }
      }
  }
  startGame(); 
}

