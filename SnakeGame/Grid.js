Grid = function() {
  this.show = function() {
    for (var i = 0; i < width; i += 20) {
      stroke(150)
      line(i, 0, i, height)
      line(0, i, width, i)
    }
  }
}