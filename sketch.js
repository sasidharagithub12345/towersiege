var a;
var circles=[];
var block,block2,block3,block4,block5,block6
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 block = new Blocks(600,700,40,80,PI/2);
 console.log("2")
 block2 = new Blocks(570,700,40,80,PI/2);
 block3= new Blocks(630,700,40,80,PI/2);
 block4= new Blocks(660,700,40,80,PI/2);
 block5= new Blocks(540,700,40,80,PI/2);
 block6= new Blocks(580,700,40,80,PI/2);
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 
 block.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 