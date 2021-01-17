//to export restartGame module
export default function RestartGame(){

    //to remove the backdrop on restart
    (<HTMLDivElement>document.querySelector(".main-con")).removeChild((<HTMLDivElement>document.querySelector(".backdrop")));

    //to remove game-container from display
    (<HTMLDivElement>document.querySelector(".game-con")).style.display = "none";

    //to reset the hangman image
    (<HTMLImageElement>document.querySelector(".hangman")).src = " "
    
    //to reset all the letter options, back from disabled in game-container
    var letterOptionList = document.querySelectorAll(".letter")
    for(var i=0;i<26;i++) { letterOptionList[i].classList.remove("disabled"); }
    
    //to remove all the letter holder elements in game-container
    var letterHoldersParent = (<HTMLElement>document.querySelector(".letter-holders-con"))
    while(letterHoldersParent.firstChild){
        letterHoldersParent.removeChild(letterHoldersParent.firstChild)
    };

    //to remove the hint element
    var hintParent = (<HTMLElement>document.querySelector(".hint-con"));
    while(hintParent.firstChild){
        hintParent.removeChild(hintParent.firstChild)
    }
    
    //to display the game-home 
    (<HTMLDivElement>document.querySelector(".start-con")).style.display = "flex";
    
}