export default function Play(){
    (<HTMLElement>document.querySelector(".play")).addEventListener('click',()=>{

        (<HTMLDivElement>document.querySelector(".start-con")).style.display = "none";

        (<HTMLDivElement>document.querySelector(".menu-con")).style.display = "flex";
    });
};