const wordList = [
    {
        word : "algae",
        hint : "a simple aquatic plant"
    },
    {
        word : "picnic",
        hint : "outing with friends and family"
    },
    {
        word : "seize",
        hint : "keeping in control"
    },
    {
        word : "desire",
        hint : "a synonym for wish"
    },
    {
        word : "attain",
        hint : "succeed in achieving"
    },
    {
        word : "conference",
        hint : "formal meeting for discussion"
    },
    {
        word : "dare",
        hint : "having courage for something"
    },
    {
        word : "frequent",
        hint : "happening often"
    },
    {
        word : "gigantic",
        hint : "of great size"
    },
    {
        word : "iconic",
        hint : "of nature as an icon"
    },
    {
        word : "invisible",
        hint : "unable to be seen"
    },
    {
        word : "junior",
        hint : "denoting younger people"
    },
    {
        word : "keen",
        hint : "showing eagerness"
    },
    {
        word : "lovable",
        hint : "deserving love"
    },
    {
        word : "linguistic",
        hint : "relating to language"
    },
    {
        word : "noise",
        hint : "very much loud"
    },
    {
        word : "maternal",
        hint : "related to mother"
    },
    {
        word : "neighbour",
        hint : "people living near you"
    },
    {
        word : "genetic",
        hint : "related to heredity"
    },
    {
        word : "gaze",
        hint : "looking intently"
    },
    {
        word : "interior",
        hint : "related to inside"
    },
    {
        word : "common",
        hint : "same among many people"
    },
    {
        word : "degree",
        hint : "proof of education"
    },
    {
        word : "edible",
        hint : "word for eatable things"
    },
    {
        word : "atheist",
        hint : "not believe in god"
    },
    {
        word : "theist",
        hint : "believing in god"
    },
    {
        word : "honour",
        hint : "showing respect"
    },
    {
        word : "vandal",
        hint : "who damages public property"
    },
    {
        word : "pauper",
        hint : "who has no money"
    },
    {
        word: "acknowledge",
        hint: "admit the fact"
    },
    {
        word : "novice",
        hint : "new to a job"
    },
    {
        word : "egoistic",
        hint : "one who thinks for himself"
    },
    {
        word : "nausea",
        hint : "feeling sick"
    }
]


const input = document.querySelector(".inputs");
const reset = document.querySelector("#reset");
const hint = document.querySelector("#hint span");
 wrong = document.querySelector("#wrong span");
const type = document.querySelector(".type");
const exit =document.querySelector(".three");
left = document.querySelector(".box");
var score = 0;

let word, maxValue, right=[], incorrects=[];


function random(){
    let rObject = wordList[Math.floor(Math.random()*wordList.length)];
    maxValue=7; right=[]; incorrects=[];

    hint.innerText = rObject.hint;
    left.innerText=maxValue;
    wrong.innerText = incorrects;

    word = rObject.word;
    let html="";

    for(i=0; i<word.length; i++){
        html+=`<input type="text" disabled>`;
    }
    input.innerHTML=html;
}

random();
function start(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !right.includes(`${key}`)){
        if(word.includes(key)){
            for(let i=0; i<word.length; i++){
                if(word[i]===key){
                    right.push(`${key}`);
                    score++;
                    localStorage.setItem("Points",score);
                    input.querySelectorAll("input")[i].value=key;
                }
               
            }
        } else{
            maxValue--;
            incorrects.push(`${key}`);
        }
        left.innerText=maxValue;
        wrong.innerText = incorrects;
    }
    type.value="";
    setTimeout(()=>{
        if (right.length == word.length){
            alert(`Yeah! You got the word ${word.toUpperCase()}`);
            random();
        }else if(maxValue==0){
            alert("Gameover! No more guesses are left");
            location.href ="./result.html";
            for(let i=0; i<word.length; i++){
                    input.querySelectorAll("input")[i].value= word[i];
            }
        }
    })
}
reset.addEventListener("click",random);
type.addEventListener("keydown",()=>type.focus());
type.addEventListener("input",start);
input.addEventListener("click",()=>type.focus());

exit.onclick = ()=>{
    location.href = "./result.html";
}