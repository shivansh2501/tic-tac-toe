console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turnSym = "X";

let gameover = false;

//Function to change the turn
const changeTurn = () => {


    return turnSym === "X" ? "0" : "X";
};


let btn = document.querySelector("#reset");

btn.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    boxtext.forEach((e) => {
        e.innerText = "";
    });
    isgameover = false;
    let info = document.querySelector(".info");
    info.innerText = "Start with X";
    document.querySelector("img").style.width = "0px";
});

//Function to check for a win
const checkWin = () => {

    let boxtext = document.querySelectorAll(".boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach((e) => {
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            if(gameover === true) {
                document.querySelector("img").style.width = "200px";
            }
        }
    })

};

//Game Logic
let boxes = document.querySelectorAll(".box");
//console.dir(boxes); 

Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", (e) => {
        if(boxtext.innerText ==='') {
            boxtext.innerText = turnSym;
            turnSym = changeTurn();
            turn.play();
            checkWin();
            if(!gameover) {
                document.querySelector(".info").innerText = "Turn for " + turnSym;
            }
        }
    })
})