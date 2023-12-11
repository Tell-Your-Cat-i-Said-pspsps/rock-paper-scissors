const rockBtn =document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const scoreBoard = document.querySelector("#scoreBoard");
const resultMsg = document.querySelector("#resultMsg");
const gameResultModal = document.querySelector('#gameResultModal');
const restartGame =document.querySelector("#restartGame");
const modalHeader = document.querySelector("#modal-head");
const modalText = document.querySelector("#gameResult");



let roundResult = {
    computerWinCount : 0,
    playerWinCount : 0
}

playerScore.textContent = `Player Score : ${roundResult["playerWinCount"]}`;
computerScore.textContent = `Computer Score : ${roundResult["computerWinCount"]}`;

function getComputerChoice()
{
    // get A random number between 0 and 3

    let rand = Math.floor(Math.random() * 3);
    let array = ["rock" , "paper" ,"scissors"];
    return array[rand];

}


function playRound(playerSelect,computerSelect)
{
    if (roundResult["playerWinCount"] === 5 || roundResult["computerWinCount"] === 5)
    {
        endGame();
    }
    else{

        let result = '';
        if (playerSelect === computerSelect)
        {
            resultMsg.textContent = "ITS A TIE";
            result = "tie";
        }
        else if ((playerSelect === "rock" && computerSelect === "scissors") ||  
        (playerSelect === "paper" && computerSelect === "rock")||
        (playerSelect === "scissors" && computerSelect === "rock"))
        {
            resultMsg.textContent =`YOU WIN, ${playerSelect.toUpperCase()} BEATS ${computerSelect.toUpperCase()}`;
            result = "win";
        }
        else 
        {
            resultMsg.textContent = `YOU LOSE, ${computerSelect.toUpperCase()} BEATS ${playerSelect.toUpperCase()}`;
            result = "lose";
        }
        updateResult(result);
        if (roundResult["playerWinCount"] === 5 || roundResult["computerWinCount"] === 5)
        {
            endGame();
        }

    }

}


// Adding event listener for each choice button
rockBtn.addEventListener("click",() =>{
    playRound("rock",getComputerChoice());

});
paperBtn.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
})
scissorsBtn.addEventListener("click" , ()=> {
    playRound('scissors',getComputerChoice());
})

// update score result on page
function updateResult (roundScore)
{
    if (roundScore === "win")
    {
        roundResult["playerWinCount"] +=1;
    }
    else if (roundScore === "lose")
    {
        roundResult["computerWinCount"] +=1;
    }
    playerScore.textContent = `Player Score : ${roundResult["playerWinCount"]}`;
    computerScore.textContent = `Computer Score : ${roundResult["computerWinCount"]}`;

}


function showGameResultModal()
{
    gameResultModal.style.display ="flex";
    if (roundResult["playerWinCount"] === 5)
    {
        modalHeader.textContent ="CONGRATULATIONS!";
        modalText.textContent = "YOU WON!";
    }
    else if (roundResult["computerWinCount"] === 5)
    {
        modalHeader.textContent ="YOU LOST!";
        modalText.textContent = "Better luck next time.";
    }
    restartGame.addEventListener("click",()=>{
        roundResult["playerWinCount"] = 0;
        roundResult["computerWinCount"] = 0;
        playerScore.textContent = `Player Score : ${roundResult["playerWinCount"]}`;
        computerScore.textContent = `Computer Score : ${roundResult["computerWinCount"]}`;
        resultMsg.textContent ='';
        gameResultModal.style.display ="none";
    })
    gameResultModal.style.display ="flex";
}
function endGame()
{
    rockBtn.removeEventListener("click",() =>{
        playRound("rock",getComputerChoice());
    
    });
    paperBtn.removeEventListener("click",()=>{
        playRound("paper",getComputerChoice());
    })
    scissorsBtn.removeEventListener("click" , ()=> {
        playRound('scissors',getComputerChoice());
    })
    showGameResultModal()
}









