---
layout: default
title: breakout game
js: breakout2
---

<span style="display:inline-block; width: 50px;"></span>
<button id=start_game class='btn btn-primary'>
  Start Game</button> 
  <div style="margin: 30px;"></div>
  
  Move the paddle either a) with left and right keys or b) with the mouse. <br>Try the mouse handle before clicking the start button. <br>You have 2 lives and need to kill 6 bricks.

<div id=over class=modal>

  <div class='modal-content'>
    <span class=close>&times;</span>
    <p>Game Over</p>
  </div>

</div>

<div id=win class=modal>

  <div class='modal-content'>
  <span class=close>&times;</span>
  <p>You won</p>
  </div>

</div>

<div id=live class=modal>

  <div class='modal-content'>
    <span class=close id=live>&times;</span>
    <p>You lost one live</p>
  </div>

</div>

<div id=canvas style='margin-top:70px;margin-bottom:70px'>


<canvas id=myCanvas></canvas>


</div>
