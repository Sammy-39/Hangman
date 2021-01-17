export default function Back(){
    (<HTMLElement>document.querySelector(".back")).addEventListener('click',()=>{

        (<HTMLDivElement>document.querySelector(".start-con")).style.display = "flex";
    
        (<HTMLDivElement>document.querySelector(".menu-con")).style.display = "none";
    });
}