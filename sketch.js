// depth-first search algorithm implemented using backtracking to make a maze generator
let cols,rows;
let w = 20;
let grid = [];
let current; //cell being visited
let stack = [];

function setup() {
    createCanvas(600,600);
    cols = floor(width/w);
    rows = floor(height/w); 
    frameRate(13);   
    //create cells
    for(let j = 0; j < rows; j++) {
        for(let i = 0; i < cols; i++) {
            let cell = new Cell(i,j);
            grid.push(cell); //add cells to the grid array
        }
    }
    current = grid[0]; //
}

function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show(); // call the cell show fun
  }
  current.visited = true;
  current.highlight(); // adds color to the current cell
  //step 1: choose randomly unvisited neighbour
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
     //step 2: push the current cell to the the stack
     stack.push(current);     
    //step 3: remove the wall between the current and the choosen cell
    removeWalls(current, next);
    //step 4:make the choosen cell the current cell and make it visible
    current = next; 
  } else if (stack.length > 0) {
    //step 2.1:pop a cell from the stack
    let cell = stack.pop();
    //step 2.2: make cell the current cell
    current = cell;
  }
}

function index(i,j) {
  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) { //check for cells with neighbors whose top,left,right or bottom may be invalid
      return -1;
  }
  return i + j * cols;
}



function removeWalls(a,b) { 
  let x = a.i - b.i;
  if (x === 1){
    a.walls[3] = false; //left wall removed
    b.walls[1] = false; //right wall removed
    
  } else if (x === -1){
    a.walls[1] = false; //right wall removed
    b.walls[3] = false; //left wall removed
  }
  let y = a.j - b.j;
  if (y === 1){
    a.walls[0] = false; //top wall removed
    a.walls[2] = false; //bottom wall removed
  } else if (y === -1){
    a.walls[2] = false; //bottom wall removed
    a.walls[0] = false; //top wall removed
  }
}
