var blocksize=25;
var row = 20;
var cols=20;
var board;
var Context;
//food
var foodx;
var foody;
//snake head
var snakex=blocksize*5
var snakey=blocksize*5;
//moving snake with velocity 
var velocityX=0;
var velocityy=0;

//Snake Body
var SnakeBody=[];
var gameOver=false;

//adding score while collecting food
var Score=0;


//onload updateds the function each frame
window.onload = function(){
    board = document.getElementById("board")
    board.height=row*blocksize;
    board.width=cols*blocksize;
    Context=board.getContext("2d")

    //customization
   

    placefood();
    document.addEventListener("keyup",changeDirection);//when up arrow is pressed it changes the direction
    //update();
    setInterval(update,1000/10);
  

}

function update(){
    if(gameOver){
        return;
    }
    //Draws the snake
    Context.fillStyle="black"
    Context.fillRect(0,0,board.width,board.height);

 //context for food
 Context.fillStyle="red";
 Context.fillRect(foodx,foody,blocksize,blocksize);
//checking collision with position
if (snakex==foodx && snakey==foody){
    SnakeBody.push([foodx,foody])
    placefood();
    Score+=1;
    document.getElementById("scre").innerHTML="Score: "+Score;
}

//moving Snakes body
for(let i=SnakeBody.length-1;i>0;i--){
    SnakeBody[i]=SnakeBody[i-1];
}
//updating segments
if(SnakeBody.length){
    SnakeBody[0]=[snakex,snakey];
}

//drawing snake
    snakex+=velocityX*blocksize;
    snakey+=velocityy*blocksize;
    Context.fillStyle = "lime";
    Context.fillRect(snakex,snakey,blocksize,blocksize);
//drawing snakes body
for(let i=0;i<SnakeBody.length;i++){
    Context.fillRect(SnakeBody[i][0],SnakeBody[i][1],blocksize,blocksize)
}

//gameOver Conditions
if(snakex<0 ||  snakex>cols*blocksize|| snakey<0||snakey>row*blocksize){
    gameOver=true;
    alert("Game Over!!!")
}
 for (let i=0 ;i<SnakeBody.length;i++){
    if(snakex==SnakeBody[i][0] && snakey==SnakeBody[i][1]){
        gameOver=true;
        alert("Game Over!!")
    }
 } 
 
 scoremotivator();
}


//function to place food randomly
function placefood(){
    foodx=Math.floor(Math.random()*cols)*blocksize;
    foody=Math.floor(Math.random()*row)*blocksize;
}
//function to change the direction

function changeDirection(e){
if(e.code=="ArrowUp" && velocityy!=1){
velocityX=0;
velocityy=-1;
}
else if(e.code=="ArrowDown" && velocityy!=-1){
 velocityX=0;
 velocityy=1;
}
else if(e.code=="ArrowLeft" && velocityX!=1){
     velocityX=-1;
     velocityy=0;
    }    
else if(e.code=="ArrowRight" && velocityX!=-1){
    velocityX=1;
    velocityy=0;
    }

}
function scoremotivator(){
    if (Score>=10 && Score<25){
        document.getElementById("CheerDisp").innerHTML="great your doing good"
    }
    else if(Score=>25 && Score<10){
        document.getElementById("CheerDisp").innerHTML="Cool your rocking"
    }
    else if(Score>50){
        document.getElementById("CheerDisp").innerHTML="You have enterd god mode"
    }
}