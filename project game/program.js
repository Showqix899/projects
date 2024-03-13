let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const msgBody=document.querySelector(".msg-container");
const yourScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");




const drawGame=()=>{
    console.log("Draw");
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
};



choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);

        
    });
    
});
const playGame=(userChoice)=>{
    console.log(userChoice);
    const computerChoice=genCompChoice();
    console.log(computerChoice);
    if(userChoice===computerChoice){
        drawGame();
        msg.innerText="DRAW";
        msgBody.style.backgroundColor="Blue";

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice === "scissors" ? false : true;
        }
        else if(userChoice==="scissors"){
            userWin=computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText="YOU WON";
        msgBody.style.backgroundColor="green";
        userScore++;
        yourScore.innerText=userScore;
    }
    else{
        console.log("you Lose");
        msg.innerText="YOU LOST";
        msgBody.style.backgroundColor="Red";
        compScore++;
        cScore.innerText=compScore;

    }
}


