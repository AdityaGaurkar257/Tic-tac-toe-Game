let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector("#new");
let msgContainer=document.querySelector("msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX.playerY


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]


box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner=(winner)=>{
    msg.innerText='Congratulation,winner is $(winner)';
    msgContainer.classList.remove("hide");

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;

        if(pos1val!=""&& pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val) {
                console.log("winner",pos1val);
                showWinner(pos1val);

            }
        }
    }
};