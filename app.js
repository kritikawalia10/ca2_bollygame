const play = document.getElementById("button");
play.onclick = ()=>{
    location.href="./play.html";
}

let names = document.getElementById('pname');


names.onchange = () =>{
    localStorage.setItem('PlayerName',names.value);
}

const info = document.getElementById("dot");
info.onclick=()=>{
    location.href = "./info.html";
}