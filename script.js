let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let btns =["red", "green", "blue", "yellow"];

let gameSeq = [];
let userSeq = [];
let started =false;
let level = 0;

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Game is started")
        started == true;

        levelUp();
    }
});

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);
}


function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
}, 500);
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);

}


function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}
let idx = level-1;
function checkAns(idx){

    if(gameSeq[idx]=== userSeq[idx] ){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        body.classList.add("alert");
        setTimeout(function(){
            body.classList.remove("alert");
        }, 200);

        h2.innerHTML =  `Game Over! Your Score was <b>${level}</b> press any key to restart`;
        reset();
    }
}
function reset(){
     started =false;
     gameSeq = [];
     userSeq = [];
     level = 0;
}
