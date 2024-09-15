let myChoice=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");
let userScore=0;
let compScore=0;
let you=document.getElementById("you");
let computer=document.getElementById("computer");




const compChoice=()=>{

    let options=["rock","paper","scissors"];
     let idx=Math.floor((Math.random()*3));
    
      return options[idx];
      
}
const drawGame=()=>{
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "green"; 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      you.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
       compScore++;
       computer.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

  const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = false;

        // Rock beats Scissors, Paper beats Rock, Scissors beat Paper
        if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        }

        // Call showWinner based on who won
        showWinner(userWin, userChoice, compChoice);
    }
};

myChoice.forEach(choice => {

    
     choice.addEventListener("click", () => {

        let user=choice.getAttribute("id");
       
        let computerChoice=compChoice();

         checkWinner(user,computerChoice);

});
});
