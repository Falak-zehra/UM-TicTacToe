let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#resetbtn");

let turn = "X";//playerX playerO
let winmsg = document.querySelector(".winmsg");
let newgame = document.querySelector("#newbtn");
let msg = document.querySelector("#win");

//winning-horizontally or vertically or diagonally
const winnerpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
//reset button
const resetgame = ()=>{
    turn = "X"
    enablebox();
    winmsg.classList.add("hide");

}
//game logic
//box when clicked- X or O

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn==="X"){
            box.innerText= "X";
            turn = "O";
        }
        else{
            box.innerText = "O";
            turn = "X";
        }
        box.disabled= true;
        checkwin();

    })
})
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enablebox = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}
//winner message
const showwin = (winner)=>{
    win.innerText = 'congratulations winner is ' + winner ;
    winmsg.classList.remove("hide");
    disablebox();
    

}
//To check who is winner
const checkwin = ()=>{
    for(let pattern of winnerpattern){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value===pos2value && pos2value===pos3value){
                console.log("winner",pos1value);
                showwin(pos1value);
            }



        }

    }
}

newbtn.addEventListener("click",resetgame );
resetbtn.addEventListener("click",resetgame );



