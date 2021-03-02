---
layout: default
js: readme2
title: Welcome to the Game
---


##### Draw with the mouse
<br>

{::nomarkdown}
<canvas id="canvas" width="200" height="300" style='background:#eee'></canvas>
<input type="button" value="draw" onclick="use_tool('draw');" />
<input type="button" value="erase" onclick="use_tool('erase');" />
<div id="output"></div>
{:/}

<br>
<br>

##### Games

Page|Description|Comment
-|-|-
Breakout | Arcade game with paddles|from MDN
Phaser |Arcade game with paddles| uses framework Phaser
W3 Game|Tbd|In progress
{:.table-striped .table-bordered}

<br>
<br>

##### Work in progress

Site|Feature|Detail
-|-|-
breakout|Keys|Left and right keys before Game Start
breakout|Mouse Control|Bottom Mouse movements below Canvas should not move the paddle
breakout|Loop|show modal when live is gone
{:.table-striped .table-bordered}
