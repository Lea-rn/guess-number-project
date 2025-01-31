"use strict";

// console.log(document) //// el file html ...

// let buttonAgain = document.querySelector(".btn-again").textContent = "jalila"
// console.log(buttonAgain)

// let logo = document.querySelector(".result-logo")
// console.log(logo)

// let input = document.querySelector("input").value
// console.log(input)

// let title = document.querySelector(".title").textContent ="welcome"
// console.log(title)

////// may7otech number ; number shih ; number ghalet(number akber , asgher)

//// ui  === > user interface

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(typeof secretNumber, secretNumber);
let highscore = document.querySelector(".hightscore-result").textContent;
// document.querySelector(".result-logo").textContent = secretNumber

/////// dry ::: d'ont repeat your self ..

let score = 20;
document.querySelector(".score-result").textContent = score;

function displayMessage (message){
    document.querySelector(".message").textContent = message
}

function reset (){
    document.querySelector("body").style.backgroundColor = "rgb(56, 55, 55)";
    document.querySelector("input").value = "";
    document.querySelector(".result-logo").textContent = "?"; 
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);
  console.log(typeof guess, "guess");

  if (!guess) {
   displayMessage(" 🛑 NO Number !!! ")
  } else if (guess === secretNumber) {
  displayMessage(" 🎉 Correct Number !!! ")
    //  score = score +1
    score++;
    document.querySelector(".score-result").textContent = score;
    document.querySelector("body").style.backgroundColor = "chartreuse";
    document.querySelector(".result-logo").textContent = secretNumber;
    document.querySelector("input").value = "";
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    if (score > highscore) {
      document.querySelector(".hightscore-result").textContent = score;
    }
  } 
  
    else if (score > 0 ){
        if (guess !== secretNumber){
      displayMessage(guess > secretNumber ? "📈 To high" : " 📉 To low")
      score--;
      document.querySelector(".score-result").textContent = score;
      document.querySelector("input").value = "";
        }
    }
    else {
        displayMessage(" 🧨 you loose !!!  ")
    }  
});
  
  


