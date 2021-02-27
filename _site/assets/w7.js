window.onload=function(){
    
console.log(4)
var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(10, 120,30, 30, 'red' );
}

myGameArea = {
  canvas : document.getElementById("mycanvas"),
  start : function() {
    this.canvas.width = 640;
    this.canvas.height = 320;
    this.context = this.canvas.getContext('2d');
    //this.canvas.style.cursor='none'
     this.interval = setInterval(updateGameArea, 100);
    
    //window.addEventListener('keydown', function (e) {
      //myGameArea.key = e.key;
    //})
    //window.addEventListener('keyup',function(e){
      //myGameArea.key=false
    //})
    window.addEventListener('keydown',function(e){
      myGameArea.keys = (myGameArea.keys|| [] );
       myGameArea.keys[e.key] = true;
     })
     window.addEventListener('keyup', function (e) {
       myGameArea.keys[e.key] = false;
     })
    
    //  window.addEventListener('mousemove', function (e) {
    //   myGameArea.x = e.pageX;
    //   myGameArea.y = e.pageY;
    // })
  },
   clear : function() {
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }
}

function component(x, y,width,height,color) {
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
    
   this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

 function updateGameArea() {
   myGameArea.clear();
   //myGamePiece.x+=1

   if (myGameArea.key == 'ArrowDown'){
       
       myGamePiece.speedY=1
    }
    myGamePiece.newPos();

//   if (myGameArea.keys){
//   if (myGameArea.keys['ArrowLeft']) {
//         myGamePiece.speedX = -1; 
//    }

//   if (myGameArea.keys['ArrowUp']) {
//         myGamePiece.speedY = -1; 
//    }
//     if (myGameArea.keys['ArrowRight']) {
//         myGamePiece.speedX = 1; 
//     }
//     if (myGameArea.keys['ArrowDown']) {
//         myGamePiece.speedY = 1; 
//     }
//   }    
//   myGamePiece.newPos()
   myGamePiece.update()
 }

 document.getElementById('moveup').addEventListener('mouseup',function() {
   myGamePiece.speedY = 0;
      myGamePiece.speedX = 0;

 })
 
 document.getElementById('moveup').addEventListener('mousedown',function() {
   myGamePiece.speedY -= 1;
 })
 document.getElementById('moveup').addEventListener('touchstart',function() {
   myGamePiece.speedY -= 1;
 })

 document.getElementById('movedown').addEventListener('mouseup',function() {
   myGamePiece.speedY = 0;
 })
 document.getElementById('movedown').addEventListener('mousedown',function() {
   myGamePiece.speedY += 1;
 })

 document.getElementById('moveleft').addEventListener('click',function() {
   myGamePiece.speedX -= 1;
 })

 document.getElementById('moveright').addEventListener('click',function() {
   myGamePiece.speedX += 1;
 })

    startGame()
}
