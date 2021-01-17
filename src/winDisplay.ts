//importing restartGame module
import RestartGame from './restartGame';

//to display appropriate message to the winner
export default function WinDisplay(word:string){

    //to display backdrop element above game-container
    var gameContainer = (<HTMLElement>document.querySelector(".game-con"))
    gameContainer.style.position = "relative"

    //to create and set backdrop element
    var backdropElement = document.createElement("div");
    backdropElement.classList.add("backdrop");
    backdropElement.style.height = "100%"
    backdropElement.style.width = "100%"
    
    //to create and display success message
    var successElement = document.createElement("div");
    successElement.innerText = "You Won!";
    successElement.setAttribute("style","font-size:70px; text-align:center;");

    //to display the correct answer, passed as param
    var answerElement = document.createElement("div")
    answerElement.innerText = `Answer was: ${word}`
    answerElement.setAttribute("style","font-size:30px; text-align:center;");

    //to reset and display the game-home
    var restartElement = document.createElement("div")
    restartElement.innerText = "Click here to restart"
    restartElement.setAttribute("style","font-size:20px; cursor:pointer; text-align:center;")
    restartElement.addEventListener('click',()=>{
        RestartGame();
    })

    
    //to append success, answer and restart elements to backdrop element
    backdropElement.append(successElement,answerElement,restartElement);

    //to append backdrop element to main container
    (<HTMLElement>document.querySelector(".main-con")).append(backdropElement)

}