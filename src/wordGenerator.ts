//to create random category words list
var Random = ['designer', 'achieve', 'adventure', 'rotation', 'calculate', 
'explicit', 'response', 'prestige', 'flower', 'clothes']

//to create famouspeople category words list
var FamousPeople = ['larry page', 'steve jobs', 'dennis ritchie', 'stephen hawking', 'albert einstein',
'elon musk', 'da vinci', 'george orwell', 'nelson mandela', 'abraham lincoln']

//to create movies category words list
var Movies =  ['the godfather', 'citizen kane', 'toy story', 'angry men', 'pulp fiction', 'fight club',
'inception', 'the matrix', 'goodfellas', 'seven samurai']

//to create countries&cities category words list
var CountriesNCities = ['mumbai', 'south korea', 'amsterdam', 'athens', 'bangkok', 'budapest', 'australia',
'france', 'germany', 'canada']

//to create televisionshows category words list
var TelevisionShows = ['vikings', 'the office', 'peaky blinders', 'the boys', 'supernatural', 'breaking bad', 
'the big bang theory', 'lucifer', 'the sopranos', 'black mirror']

//to create dictionary category words list with its description(hint)
var Dictionary = [
    {'becalm' : `make still, steady, or tranquil` },
    {'caprice' : `a sudden desire`},
    {'capricious' : `determined by chance or impulse rather than by necessity`},
    {'felicity' : `pleasing and appropriate manner or style`},
    {'gallant' : `having or displaying great dignity or nobility`},
    {'gleeful' : `full of high-spirited delight`},
    {'heyday' : `the period of greatest prosperity or productivity`},
    {'madcap' : `characterized by impulsiveness or recklessness`},
    {'majestic' : `having or displaying great dignity or nobility`},
    {'phantasy' : `imagination unrestricted by reality`}
]

//to create characters category words list
var Characters = ['batman', 'james bond', 'superman', 'darth vader', 'peter pan', 'indiana jones', 'vito corleone',
'han solo', 'spiderman', 'the joker']

//to create kids category words list
var Kids = ['active', 'adopted', 'learning', 'beautiful', 'complex', 'compulsive', 'precious', 'dreaming', 'innocent',
'wonderful']

//to export randomWord function
export default function randomWord(category:string){

    //to return a random word from random words list
    if(category === "Random"){ return Random[Math.floor(Math.random()*10)]; }

    //to return a random word from famous-people words list
    if(category === "Famous People"){ return FamousPeople[Math.floor(Math.random()*10)]; }

    ////to return a random word from movies words list
    if(category === "Movies"){ return Movies[Math.floor(Math.random()*10)]; }

    ////to return a random word from countries&cities words list
    if(category === "Countries & Cities"){ return CountriesNCities[Math.floor(Math.random()*10)]; }

    //to return a random word from television-shows words list
    if(category === "Television Shows"){ return TelevisionShows[Math.floor(Math.random()*10)]; }

    //to return a random word from dictionary words list with its hint
    if(category === "Dictionary") { return Dictionary[Math.floor(Math.random()*10)]; }

    //to return a random word from character words list
    if(category === "Characters"){ return Characters[Math.floor(Math.random()*10)]; }

    //to return a random word from kids words list
    if(category === "Kids"){ return Kids[Math.floor(Math.random()*10)]; }
    
}