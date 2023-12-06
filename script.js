function getComputerChoice()
{
    // get A random number between 0 and 3

    let rand = Math.floor(Math.random() * 3);
    let array = ["rock" , "paper" ,"scissors"];
    return array[rand];

}

function getPlayerChoice()
{
    let playerChoice = prompt("Enter your choice").toLowerCase().trim();
    if ((playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"))
    {
        return playerChoice;
    }
    else
    {
        playerChoice = getPlayerChoice();
    }
    return playerChoice;
}
let computerWinCount;
let playerWinCount;


function playRound(playerSelect,computerSelect)
{
    if (playerSelect === computerSelect)
    {
        console.log("ITS A TIE");
        return "tie";
    }
    else if ((playerSelect === "rock" && computerSelect === "scissors") ||  
    (playerSelect === "paper" && computerSelect === "rock")||
    playerSelect === "scissors" && computerSelect === "rock")
    {
        console.log(`YOU WIN, ${playerSelect.toUpperCase()} BEATS ${computerSelect.toUpperCase()}`);
        return "win";
    }
    else 
    {
        console.log(`YOU LOSE, ${computerSelect.toUpperCase()} BEATS ${playerSelect.toUpperCase()}`);
        return "lose";
    }
}
function game()
{
    let = playerWins = 0;
    let =computerWins = 0;
    for ( let i = 0; i < 5; i++)
    {
        let result = playRound(getPlayerChoice(),getComputerChoice());
        while (result === "tie")
        {
            result = playRound(getPlayerChoice(),getComputerChoice());
        }  
        if (result === "win")
        {
            playerWins++;
            if(playerWins > 2)
            {
                return "won";
            }
        }
        else if (result === "lose")
        {
            computerWins++;
            if(computerWins >2)
            {
                return "lost";
            }
        }
    }
    if (playerWins > computerWins)
    {
        return "won";
    }
    else{
        return "lost";
    }
}
let gameResult = game();
console.log(`You ${gameResult} this game!`);





