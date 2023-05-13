var player=0;
var boole1=0;
var boole2=0;
var boole3=0;
var boole4=0;
var boole5=0;
var boole6=0;
var boole7=0;
var boole8=0;
var boole9=0;
var color1="rgb(255, 255, 255)"
var color2="rgb(0, 0, 0)"
//common for all function
function player_find(){
    
   player+=1;
    return player
}
//unique for each function
//function for button1
function e1click(){
    console.log(player)
    if (player%2==0){
        document.getElementById("e1").style.backgroundColor=color1;
        boole1=1;
        console.log("on or off")
        console.log(boole1)
    }
    else{
        document.getElementById("e1").style.backgroundColor=color2;
        boole1=2;
        console.log("on or off")
        console.log(boole1)
    }
    
    console.log("function works")
}
//function for button 2
function e2click(){
    console.log(player)
    if (player%2==0){
        boole2=1
        document.getElementById("e2").style.backgroundColor=color1;
    }
    else{
        boole2=2
        document.getElementById("e2").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button3
function e3click(){
    console.log(player)
    if (player%2==0){
        boole3=1
        document.getElementById("e3").style.backgroundColor=color1;
    }
    else{
        boole3=2
        document.getElementById("e3").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button4
function e4click(){
    
    console.log(player)
    if (player%2==0){
        boole4=1
        document.getElementById("e4").style.backgroundColor=color1;
    }
    else{
        boole4=2
        document.getElementById("e4").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button5
function e5click(){
    console.log(player)
    if (player%2==0){
        boole5=1
        document.getElementById("e5").style.backgroundColor=color1;
    }
    else{
        boole5=2
        document.getElementById("e5").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button 6
function e6click(){

    console.log(player)
    if (player%2==0){
        boole6=1
        document.getElementById("e6").style.backgroundColor=color1;
    }
    else{
        boole6=2
        document.getElementById("e6").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button 7
function e7click(){
    console.log(player)
    if (player%2==0){
        boole7=1
        document.getElementById("e7").style.backgroundColor=color1;
    }
    else{
        boole7=2
        document.getElementById("e7").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button 8
function e8click(){
    console.log(player)
    if (player%2==0){
        boole8=1
        document.getElementById("e8").style.backgroundColor=color1;
    }
    else{
        boole8=2
        document.getElementById("e8").style.backgroundColor=color2;
    }
    
    console.log("function works")
}
//function for button 9
function e9click(){
    console.log(player)
    if (player%2==0){
        boole9=1
        document.getElementById("e9").style.backgroundColor=color1;
    }
    else{
        boole9=2
        document.getElementById("e9").style.backgroundColor=color2;
    }
    
    console.log("function works")
}

function bolcheck(){
    console.log("bool function check")
    console.log(boole1)//e1
    console.log(boole2)//e2
    console.log(boole3)//e3
    console.log(boole4)//e4
    console.log(boole5)//e5
    console.log(boole6)//e6
    console.log(boole7)//e7
    console.log(boole8)//e8
    console.log(boole9)//e9
    console.log("--------")

    // condion [1,2,3]
if (boole1===1 && boole2===1 && boole3===1){
    console.log("player 1 win")
    document.getElementById("disp").innerHTML="player 1 wins"

}
else if(boole1===2 && boole2===2 && boole3===2){
    console.log("player 2 win")
    document.getElementById("disp").innerHTML="player 2 wins"
}
  //consition [4,5,6]
else if(boole4===1 && boole5===1 && boole6===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole4===2 && boole5===2 && boole6===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
 // condition [7,8,9]
else if(boole7===1 && boole8===1 && boole9===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole7===2 && boole8===2 && boole9===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
// condition [1,4,7]
else if( boole1===1 && boole4===1 && boole7===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if( boole1===2 && boole4===2 && boole7===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
//condition [2,5,8]
else if(boole2===1 && boole5===1 && boole8===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole2===2 && boole5===2 && boole8===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
//consition [3,6,9]

else if(boole3===1 && boole6===1 && boole9===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole3===2 && boole6===2 && boole9===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
//condition[1,5,9]
else if(boole1===1 && boole5===1 && boole9===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole1===2 && boole5===2 && boole9===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
//conditon [3,5,7]
else if(boole3===1 && boole5===1  && boole7===1){
    console.log("player 1 wins")
    document.getElementById("disp").innerHTML="player 1 wins"
}
else if(boole3===2 && boole5===2 && boole7===2){
    console.log("player 2 wins")
    document.getElementById("disp").innerHTML="player 2 wins"
}
}