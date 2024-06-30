let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

 
let turn0 = true;
let count = 0;
 const winpat=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
 ];
 const resetgame = () =>{
    turn0 = true;
    enablebox();
    count=0;
    msgcontainer.classList.add("hide");

 };
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turn0){
            box.innerText= "O";

            turn0=false;
    
        } else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let iswinner = checkwinner();
        if(count==9&&!iswinner){
            gamedraw();
        }
    });
}) ;
const gamedraw = () =>{
    msg.innerText = `Game was a Draw`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner=(winner) => {
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
        

const checkwinner = () => {
    for(let pattern of winpat){
    
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1 !== "" && pos2 !== ""&& pos3 !== ""){
        if(pos1===pos2&&pos2===pos3){
            console.log("winner",pos1);
            showwinner(pos1);
        }
    }
}
}
newBtn.addEventListener("click",resetgame );
resetBtn.addEventListener("click",resetgame );
 

