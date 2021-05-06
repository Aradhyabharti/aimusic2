function play(){
    song.play("music.mp3")  
    song.play("music2.mp3")  
  }
  
  
  
  function setup(){
      canvas=createCanvas(400,400)
      canvas.center()
          video=createCapture(VIDEO)
          video.center()
          video.hide()
  }
  
  
  
  function draw(){
      image(video,0,0,400,400)
  }