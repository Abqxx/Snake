Snake = function() {

  this.x = 250
  this.y = 250
  this.xdir = 0;
  this.ydir = -1;
  this.total = 0;
  this.tail = []

  this.eat = function(food) {
    var d = dist(this.x, this.y, food.x, food.y)
    if (d === 0) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  this.death = function (){
    for (var i = 0; i<this.tail.length;i++) {
      var pos = this.tail[i]
      var d = dist(this.x,this.y,pos.x,pos.y)
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
    
  }
  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y)
    console.log(this.tail)
    this.x += 20 * this.xdir
    this.y += 20 * this.ydir

  }

  this.show = function() {
    rectMode(CENTER)
    noStroke()
    fill(255, 0, 0)
    rect(this.x, this.y, 20, 20)

    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 20, 20)
    }

  }

  this.boundaries = function() {
    if (this.x < 0) {
      this.x = width - 10
    }
    if (this.x > width) {
      this.x = 10
    }
    if (this.y < 0) {
      this.y = height - 10
    }
    if (this.y > height) {
      this.y = 10;
    }
  }
}