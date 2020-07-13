var sprites = [], j;

var loc = [];
/* loc = [
    {
      'no': x,
      'pos':{x: 10, y: 10};
    }
]
*/

var mouse = {x: 0, y: 0};

function preload(){
  for(var i = 0; i <= 126; i++){
    if(i < 10){
      j = '00';
    }
    else if(i < 100){
      j = '0';
    }
    else {
      j = '';
    }
    sprites.push(loadImage("./assets/blocks_"+j+i+".png"));
  }
}

function setup(){
  createCanvas(400,400);

  rectMode(CENTER);
  imageMode(CENTER);
}
function draw(){
  background(240);
  mouse.x = (Math.round((mouseX/8)))*8;
  mouse.y = (Math.round((mouseY/8)))*8;

  for(var i = 0; i < loc.length; i++){
    image(sprites[loc[i].no], loc[i].pos.x, loc[i].pos.y);
  }

  noFill();
  rect(mouse.x, mouse.y, 8, 8);
}

function mouseClicked(){
  loc.push({
    'no': 10,
    'pos': {x: mouse.x, y: mouse.y}
  });
}