//to import randomWord to get a random word in a category
import randomWord from './wordGenerator';
//to import windisplay to display winner's message
import WinDisplay from './winDisplay';
//to import windisplay to display loser's message
import LostDisplay from './lostDisplay';

//to export Game function
export default function Game(){
     
    //to store the letter placeholder elements list
    var wordLetterList: HTMLParagraphElement[] = [];

    //to store the alphabet option elements list
    var letterOptionList: HTMLParagraphElement[] = [];
    var letterList: string[] = ['A','B','C','D','E',
    'F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z'];

    //to store generated random word
    var word:any

    //to check for the win/lose scenario
    var letterWrongGuessCount = 0
    var letterRightGuessCount = 0

    //to create alphabet option elements with an onclick event
    for(var i=0;i<26;i++){
        letterOptionList.push(document.createElement("p"));
        letterOptionList[i].classList.add("letter");
        letterOptionList[i].innerText = letterList[i];

        //onclick event to check if the letter matches with the characters present in the random word
        letterOptionList[i].addEventListener('click', (event)=>{
            var letterElement = <HTMLElement>event.target
            letterElement.classList.add("disabled")
            var letterEntered =  letterElement.innerText.toLowerCase()
            var flag=0;
            for(var j=0;j<word.length;j++){
                if((word[j] === letterEntered && letterWrongGuessCount<7)){
                    wordLetterList[j].innerText = word[j]
                    letterRightGuessCount++;
                    flag=1;
                }
            }

            //to set the hangman image as per the letter option pressed
            if(flag===0) {
                var imageElement = (<HTMLImageElement>document.querySelector(".hangman"))
            
                if(imageElement.src === `http://localhost:8080/public/`){ 
                    letterWrongGuessCount = 0 
                }

                imageElement.src = `./img/hangman-${letterWrongGuessCount}.svg`

                letterWrongGuessCount++; 
            }

            //to handle string with spaces
            var wordLength = word.split(" ").join("").length

            //to redirect to win scenario
            if(wordLength === letterRightGuessCount){  
                WinDisplay(word); 
                console.log("Win");
                letterWrongGuessCount = 0
                letterRightGuessCount = 0  
            }

            //to redirect to lost scenario
            if(letterWrongGuessCount>6) { 
                LostDisplay(word);
                console.log("Lost")
                letterWrongGuessCount = 0
                letterRightGuessCount = 0
             }
        });
    };
    
    //to append the created alphabet option elements to letters container
    (<HTMLElement>document.querySelector(".letters-con")).append(...letterOptionList);


    //to create menu or category elements with an onclick event to redirect to game container along with the selected category value
    (document.querySelectorAll<HTMLDivElement>(".item-con")).forEach((item : HTMLDivElement)=>{
    
        item.addEventListener('click',(event:Event)=>{
    
            (<HTMLDivElement>document.querySelector(".menu-con")).style.display = "none";
        
            (<HTMLDivElement>document.querySelector(".game-con")).style.display = "flex";
    
            var categoryElement = <HTMLElement>event.target
            var category: string = categoryElement.innerText;
            (<HTMLElement>document.querySelector(".category-title")).innerText = category;
    
            //to set a random word based on the category to word variable
            word = randomWord(category);
            console.log(word)

            //to handle category: dictionary and its hint
            if(category==="Dictionary"){
                var key = Object.keys(word)[0];
                var hint = word[`${key}`];
                var hintElement = document.createElement("p")
                hintElement.classList.add("hint")
                hintElement.innerText = `Hint: ${hint}`; 

                (<HTMLElement>document.querySelector(".hint-con")).append(hintElement);
             
                (<HTMLElement>document.querySelector(".letter-holders-con")).style.margin = '0px 0px 10px 0px' 

                word = key
            }

            //to set the letter placeholders based on the random word
            wordLetterList = []
            for(var i=0;i<word.length;i++){
                wordLetterList.push(document.createElement('p'));
                wordLetterList[i].classList.add("letter-holder");
                if(word[i]===' '){
                    wordLetterList[i].style.border = "0px"
                }
            };
            //to append the letter placeholder elements to letter-holder-container
            (<HTMLElement>document.querySelector(".letter-holders-con")).append(...wordLetterList);

        })
    });


    
    

}