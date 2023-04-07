const audioElement = new Audio("cache/b1.mp3");
      
function playSound() {


    console.log("playingSound")
  audioElement.play();
}

  function stopSound() {
    console.log("Stopping Sound")
    audioElement.pause();
  //  audioElement.currentTime = 0;
  }


  //audio2

  const audioElement2 = new Audio("cache/b2.mp3");
      
function playSound2() {
    console.log("playingSound")
  audioElement2.play();
}

  function stopSound2() {
    console.log("Stopping Sound")
    audioElement2.pause();
   // audioElement2.currentTime = 0;
  }

  //audio3
  const audioElement3 = new Audio("cache/b3.mp3");
      
  function playSound3() {
      console.log("playingSound")
    audioElement3.play();
  }
  
    function stopSound3() {
      console.log("Stopping Sound")
      audioElement3.pause();
     // audioElement3.currentTime = 0;
    }

    //onmouseleave="stopSound()"
    //audio4
    const audioElement4 = new Audio("cache/b4.mp3");
      
    function playSound4() {
        console.log("playingSound")
     audioElement4.play();
    }
    
      function stopSound4() {
        console.log("Stopping Sound")
        audioElement4.pause();
       // audioElement4.currentTime = 0;
      }
      //audio5
      const audioElement5 = new Audio("cache/b5.mp3");

      function playSound5() {
          console.log("playingSound")
        audioElement5.play();
      }
      
        function stopSound5() {
          console.log("Stopping Sound")
          audioElement5.pause();
          //audioElement5.currentTime = 0;
        }

  function bgsound(){
    console.log("cache/bg.mp3")
    const audioElement = new Audio("cache/bg.mp3");
    audioElement.loop = true;
    audioElement.play();
  }     
  
  function shoot(){
    const gunshot=new Audio("gun.mp3");
    gunshot.play();
  }
