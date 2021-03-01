window.onload=function(){

window.addEventListener('mousedown', function (e) {

    //console.log(3,e.pageX)
})

var myGamePiece;
var interval
  
  myGamePiece = new component(30, 30,'red' ,100, 100);
  
  myUpBtn = new component(30, 30, "blue", 50, 10);
  myDownBtn = new component(30, 30, "blue", 50, 70);
  myLeftBtn = new component(30, 30, "blue", 20, 40);
  myRightBtn = new component(30, 30, "blue", 80, 40);  
  
function start_game() {
  console.log('start')
  
  myGameArea.start();

}
function stop_game(){
    clearInterval(interval)
    console.log('stop')
}

myGameArea = {
  canvas : document.getElementById("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
     interval = setInterval(updateGameArea, 200);
    
    window.addEventListener('keydown',function(e){
      myGameArea.keys = (myGameArea.keys|| [] );
       myGameArea.keys[e.key] = true;
     })
     window.addEventListener('keyup', function (e) {
       myGameArea.keys[e.key] = false;
     })
    
      window.addEventListener('mousedown', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('mouseup', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })
    window.addEventListener('touchstart', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('touchend', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })  
  },
   clear : function() {
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }
}

function component(width,height,color,x, y) {
  this.width = width;
  this.height = height;
  this.speedX=0  
  this.speedY=0

  this.x = x;
  this.y = y;
  
   this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
   }
    this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
      clicked = false;
    }
    return clicked;
  }
    
   //this.newPos = function() {
    //this.x += this.speedX;
    //this.y += this.speedY;
  //}
}

 function updateGameArea() {
     console.log('run')
     
   myGameArea.clear();
   
    //myGamePiece.speedX = 0;
    //myGamePiece.speedY = 0;
    
     if (myGameArea.x && myGameArea.y) {
        myGamePiece.x = myGameArea.x;
        myGamePiece.y = myGameArea.y;
        
        if (myUpBtn.clicked()) {
            myGamePiece.y -= 1;
        }
        if (myDownBtn.clicked()) {
          myGamePiece.y += 1;
        }
        if (myLeftBtn.clicked()) {
          myGamePiece.x += -1;
        }
        if (myRightBtn.clicked()) {
          myGamePiece.x += 1;
        }
        
    }
  
    if (myGameArea.keys){
       if (myGameArea.keys['ArrowDown']){myGamePiece.speedY=1}
       if (myGameArea.keys['ArrowUp']){myGamePiece.speedY=-1}
       if (myGameArea.keys['ArrowLeft']){myGamePiece.speedX=-1}
       if (myGameArea.keys['ArrowRight']){myGamePiece.speedX=1}
    }
    //myGamePiece.newPos();    
   myGamePiece.update()
myUpBtn.update();
  myDownBtn.update();
  myLeftBtn.update();
  myRightBtn.update();
 }

 //document.getElementById('moveup').addEventListener('mouseup',function() {
   //myGamePiece.speedY = 0;
      //myGamePiece.speedX = 0;
 //})
 
 //document.getElementById('moveup').addEventListener('mousedown',function() {
   //myGamePiece.speedY -= 1;
 //})
 //document.getElementById('moveup').addEventListener('touchstart',function() {
   //myGamePiece.speedY -= 1;
 //})

 //document.getElementById('movedown').addEventListener('mouseup',function() {
   //myGamePiece.speedY = 0;
 //})
 //document.getElementById('movedown').addEventListener('mousedown',function() {
   //myGamePiece.speedY += 1;
 //})

 //document.getElementById('moveleft').addEventListener('click',function() {
   //myGamePiece.speedX -= 1;
 //})

 //document.getElementById('moveright').addEventListener('click',function() {
   //myGamePiece.speedX += 1;
 //})
 
document.getElementById('start_game').addEventListener('click',function(){
    start_game()
    })
document.getElementById('stop_game').addEventListener('click',function(){
    stop_game()
    })
}
