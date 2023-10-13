var home= document.getElementById("click");
var play = document.getElementById("play");
var score= 0;
const pointssss = document.getElementById("point");

pointssss.innerHTML=localStorage.getItem("Points");


play.onclick = ()=>{
    location.href= "./index.html";
}
home.onclick= ()=>{
    location.href= "./play.html";
}