class Bubble{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show(){
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(5)
    noFill();
    circle(this.x,this.y,this.r)
  }
  move(){
    this.x = this.x + random(5,-5)
    this.y = this.y + random(5,-5)
  }
}