//exporting ExitGame() function
export default function ExitGame(){

    //to exit and return to game-home on clicking modal ok button
    (<HTMLElement>document.querySelector(".game-back-ok")).addEventListener('click',()=>{

        //to remove game-container from display
        (<HTMLDivElement>document.querySelector(".game-con")).style.display = "none";
    
        //to reset all the letter options, back from disabled in game-container
        var letterOptionList = document.querySelectorAll(".letter")
        for(var i=0;i<26;i++) { letterOptionList[i].classList.remove("disabled"); }
    
        //to remove all the letter holder elements in game-container
        var letterHoldersParent = (<HTMLElement>document.querySelector(".letter-holders-con"))
        while(letterHoldersParent.firstChild){
            letterHoldersParent.removeChild(letterHoldersParent.firstChild)
        };

        //to reset the hangman image
        (<HTMLImageElement>document.querySelector(".hangman")).src = " "

        //to remove the hint element
        var hintParent = (<HTMLElement>document.querySelector(".hint-con"));
        while(hintParent.firstChild){
            hintParent.removeChild(hintParent.firstChild)
        }
    
        //to display the game-home 
        (<HTMLDivElement>document.querySelector(".start-con")).style.display = "flex";
    });
}
