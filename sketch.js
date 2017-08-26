var snake = [];
var food = [];
var grid;

function setup() {
  createCanvas(500, 500)
  frameRate(8)
  grid = new Grid();
  for (var i = 0; i < 1; i++) {
    snake = new Snake()
  }
  food = new Food()
}

function spawnFood() {
  food = new Food()
}




function keyPressed() {
  if (snake.xdir != 1) {
    if (keyCode === LEFT_ARROW) {
      snake.xdir = -1
      snake.ydir = 0
    }
  }
  if (snake.xdir != -1) {
    if (keyCode === RIGHT_ARROW) {
      snake.xdir = 1
      snake.ydir = 0
    }
  }
  if (snake.ydir != 1) {
    if (keyCode === UP_ARROW) {
      snake.xdir = 0
      snake.ydir = -1
    }
  }
  if (snake.ydir != -1) {
    if (keyCode === DOWN_ARROW) {
      snake.xdir = 0
      snake.ydir = 1
    }
  }
}


function draw() {
  background(0)
    //grid 20x20


  grid.show()
  snake.death()
  snake.show()
  snake.update()
  snake.boundaries()
  food.show()
  if (snake.eat(food)) {
    spawnFood()
  }
}