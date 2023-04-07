var b = document.querySelector("#movingbutton");
b.addEventListener("mousemove",change);
var score=0;
function change()
{
    score+=1;
    document.getElementById("scre").innerHTML="🪰Kills: "+score;
let i = Math.floor(Math.random()*500)+1;
let j = Math.floor(Math.random()*500)+1;
console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
}// <button class="button" id="movingbutton" >Button</button>

const audioElement = new Audio("gun.mp3");
      
function playSound() {


    console.log("playingSound")
  audioElement.play();
}

