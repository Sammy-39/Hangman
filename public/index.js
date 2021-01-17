(()=>{"use strict";var e={626:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelector(".back").addEventListener("click",(function(){document.querySelector(".start-con").style.display="flex",document.querySelector(".menu-con").style.display="none"}))}},707:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelector(".game-back-ok").addEventListener("click",(function(){document.querySelector(".game-con").style.display="none";for(var e=document.querySelectorAll(".letter"),t=0;t<26;t++)e[t].classList.remove("disabled");for(var r=document.querySelector(".letter-holders-con");r.firstChild;)r.removeChild(r.firstChild);document.querySelector(".hangman").src=" ";for(var n=document.querySelector(".hint-con");n.firstChild;)n.removeChild(n.firstChild);document.querySelector(".start-con").style.display="flex"}))}},769:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(612)),a=n(r(32)),i=n(r(983));t.default=function(){for(var e,t,r=[],n=[],l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],c=0,d=0,s=0;s<26;s++)n.push(document.createElement("p")),n[s].classList.add("letter"),n[s].innerText=l[s],n[s].addEventListener("click",(function(e){var n=e.target;n.classList.add("disabled");for(var o=n.innerText.toLowerCase(),l=0,s=0;s<t.length;s++)t[s]===o&&c<7&&(r[s].innerText=t[s],d++,l=1);if(0===l){var u=document.querySelector(".hangman");"http://localhost:8080/public/"===u.src&&(c=0),u.src="./img/hangman-"+c+".svg",c++}t.split(" ").join("").length===d&&(a.default(t),console.log("Win"),c=0,d=0),c>6&&(i.default(t),console.log("Lost"),c=0,d=0)}));(e=document.querySelector(".letters-con")).append.apply(e,n),document.querySelectorAll(".item-con").forEach((function(e){e.addEventListener("click",(function(e){var n;document.querySelector(".menu-con").style.display="none",document.querySelector(".game-con").style.display="flex";var a=e.target.innerText;if(document.querySelector(".category-title").innerText=a,t=o.default(a),console.log(t),"Dictionary"===a){var i=Object.keys(t)[0],l=t[""+i],c=document.createElement("p");c.classList.add("hint"),c.innerText="Hint: "+l,document.querySelector(".hint-con").append(c),document.querySelector(".letter-holders-con").style.margin="0px 0px 10px 0px",t=i}r=[];for(var d=0;d<t.length;d++)r.push(document.createElement("p")),r[d].classList.add("letter-holder")," "===t[d]&&(r[d].style.border="0px");(n=document.querySelector(".letter-holders-con")).append.apply(n,r)}))}))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(665)),a=n(r(626)),i=n(r(769)),l=n(r(707));o.default(),a.default(),i.default(),l.default()},983:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(946));t.default=function(e){document.querySelector(".game-con").style.position="relative";var t=document.createElement("div");t.classList.add("backdrop"),t.style.height="100%",t.style.width="100%";var r=document.createElement("div");r.innerText="You Lost!",r.setAttribute("style","font-size:70px; text-align:center;");var n=document.createElement("div");n.innerText="Answer was: "+e,n.setAttribute("style","font-size:30px; text-align:center;");var a=document.createElement("div");a.innerText="Click here to restart",a.setAttribute("style","font-size:20px; cursor:pointer; text-align:center;"),a.addEventListener("click",(function(){o.default()})),t.append(r,n,a),document.querySelector(".main-con").append(t)}},665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelector(".play").addEventListener("click",(function(){document.querySelector(".start-con").style.display="none",document.querySelector(".menu-con").style.display="flex"}))}},946:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelector(".main-con").removeChild(document.querySelector(".backdrop")),document.querySelector(".game-con").style.display="none",document.querySelector(".hangman").src=" ";for(var e=document.querySelectorAll(".letter"),t=0;t<26;t++)e[t].classList.remove("disabled");for(var r=document.querySelector(".letter-holders-con");r.firstChild;)r.removeChild(r.firstChild);for(var n=document.querySelector(".hint-con");n.firstChild;)n.removeChild(n.firstChild);document.querySelector(".start-con").style.display="flex"}},32:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(946));t.default=function(e){document.querySelector(".game-con").style.position="relative";var t=document.createElement("div");t.classList.add("backdrop"),t.style.height="100%",t.style.width="100%";var r=document.createElement("div");r.innerText="You Won!",r.setAttribute("style","font-size:70px; text-align:center;");var n=document.createElement("div");n.innerText="Answer was: "+e,n.setAttribute("style","font-size:30px; text-align:center;");var a=document.createElement("div");a.innerText="Click here to restart",a.setAttribute("style","font-size:20px; cursor:pointer; text-align:center;"),a.addEventListener("click",(function(){o.default()})),t.append(r,n,a),document.querySelector(".main-con").append(t)}},612:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=["designer","achieve","adventure","rotation","calculate","explicit","response","prestige","flower","clothes"],n=["larry page","steve jobs","dennis ritchie","stephen hawking","albert einstein","elon musk","da vinci","george orwell","nelson mandela","abraham lincoln"],o=["the godfather","citizen kane","toy story","angry men","pulp fiction","fight club","inception","the matrix","goodfellas","seven samurai"],a=["mumbai","south korea","amsterdam","athens","bangkok","budapest","australia","france","germany","canada"],i=["vikings","the office","peaky blinders","the boys","supernatural","breaking bad","the big bang theory","lucifer","the sopranos","black mirror"],l=[{becalm:"make still, steady, or tranquil"},{caprice:"a sudden desire"},{capricious:"determined by chance or impulse rather than by necessity"},{felicity:"pleasing and appropriate manner or style"},{gallant:"having or displaying great dignity or nobility"},{gleeful:"full of high-spirited delight"},{heyday:"the period of greatest prosperity or productivity"},{madcap:"characterized by impulsiveness or recklessness"},{majestic:"having or displaying great dignity or nobility"},{phantasy:"imagination unrestricted by reality"}],c=["batman","james bond","superman","darth vader","peter pan","indiana jones","vito corleone","han solo","spiderman","the joker"],d=["active","adopted","learning","beautiful","complex","compulsive","precious","dreaming","innocent","wonderful"];t.default=function(e){return"Random"===e?r[Math.floor(10*Math.random())]:"Famous People"===e?n[Math.floor(10*Math.random())]:"Movies"===e?o[Math.floor(10*Math.random())]:"Countries & Cities"===e?a[Math.floor(10*Math.random())]:"Television Shows"===e?i[Math.floor(10*Math.random())]:"Dictionary"===e?l[Math.floor(10*Math.random())]:"Characters"===e?c[Math.floor(10*Math.random())]:"Kids"===e?d[Math.floor(10*Math.random())]:void 0}}},t={};!function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607)})();
//# sourceMappingURL=index.js.map