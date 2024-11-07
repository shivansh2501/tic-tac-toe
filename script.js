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

// To Reset
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
    turnSym = "X";
    document.querySelector(".line").style.display = `none`;
    document.querySelector(".line").style.transform = ``;
});

//Function to check for a win
const checkWin = () => {

    let boxtext = document.querySelectorAll(".boxtext");

    //First three elements are grid numbers, the rest represent the rotation values
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, 5, 5, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 5, 25, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];

    wins.forEach((e) => {
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            if(gameover === true) {
                document.querySelector("img").style.width = "200px";
                document.querySelector(".line").style.display = `inline`;
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
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