let u1=''
let p1=''

function myfunc(){
    let username=document.getElementById('name').value;
    const u1=username
    localStorage.setItem("u1", username);
    console.log(u1)
    
    let userpassword=document.getElementById('password').value;
    const p1=userpassword
    console.log(p1)
    localStorage.setItem("p1", userpassword);
}

function login(){

    var storedValue1 = localStorage.getItem("u1");
    var storedValue2 = localStorage.getItem("p1");
    const checkname=document.getElementById('checkname').value;
    const checkpass=document.getElementById('checkpassword').value;
    console.log(checkname)
    console.log(checkpass)

    if(storedValue1===checkname && storedValue2===checkpass){
        document.getElementById('hdata').innerHTML="Login Success!!!";

    }
    else if (storedValue1!==checkname || storedValue2!==checkpass){
        
        document.getElementById('hdata').innerHTML="Login failed check entered data";
        
    }
    
}