Food = function() {
  this.x = 20 * ceil(random(25)) - 10
  this.y = 20 * ceil(random(25)) - 10
  
  this.show = function () {
    fill(0,255,0)
    noStroke()
    rectMode(CENTER)
    rect(this.x,this.y,20,20)
  }
}