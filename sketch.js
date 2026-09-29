let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //percorrendo o bubble
  for (let bubble of bubbles){
    bubble.show();
    bubble.move();
  }
}

function mousePressed(){
  let raio = random(10,70)
  let bubble = new Bubble(mouseX,mouseY,raio);
  bubbles.push(bubble);
}


//função isso ai msm
function mouseDragged()
{
    let raio = random(10,70)
  let bubble = new Bubble(mouseX,mouseY,raio);
  bubbles.push(bubble);
}