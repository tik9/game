---
layout: default
js: readme
---
### A Javascript and Game Repo

<br>

#### Start Drawing
<br>

{::nomarkdown}
<canvas id="canvas" width="200" height="300" style='background:#eee'></canvas>
<input type="button" value="draw" onclick="use_tool('draw');" />
<input type="button" value="erase" onclick="use_tool('erase');" />
<div id="output"></div>
{:/}

<br>
<br>

#### Games
<br>

Page|Function|Comment
-|-|-
Breakout |Keyuphandler|helper
Phaser |create| Physics: Arcade
{:.table-striped .table-bordered}

<br>
<br>

#### Improvements

Site|Feature|Detail
-|-|
breakout|Keys|Left and right keys before Game Start
breakout|Mouse Control|Bottom Mouse movements below Canvas should not move the paddle
breakout|Loop|show modal when live is gone
{:.table-striped .table-bordered}