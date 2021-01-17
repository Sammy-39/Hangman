//importing restartGame module
import RestartGame from './restartGame';

//to display appropriate message to the loser
export default function LostDisplay(word:string){

    //to display backdrop element above game-container
    var gameContainer = (<HTMLElement>document.querySelector(".game-con"))
    gameContainer.style.position = "relative"

    //to create and set backdrop element
    var backdropElement = document.createElement("div");
    backdropElement.classList.add("backdrop");
    backdropElement.style.height = "100%"
    backdropElement.style.width = "100%"
    
    //to create and display lost message
    var lostElement = document.createElement("div");
    lostElement.innerText = "You Lost!";
    lostElement.setAttribute("style","font-size:70px; text-align:center;");

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


    //to append lost, answer and restart elements to backdrop element
    backdropElement.append(lostElement,answerElement,restartElement);

    //to append backdrop element to main container
    (<HTMLElement>document.querySelector(".main-con")).append(backdropElement)

}
