let cols,rows;
let w = 40;
let grid = [];
function setup() {
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    
    //create cells
    for(let j = 0; j < rows; j++) {
        for(let i = 0; i < cols; i++) {
            let cell = new Cell(i,j);
            grid.push(cell); //add cells to the grid array
        }
    }
}

function draw() {
  background(51);   
  
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
     // call the cell show fun
  }
}
//cell
function Cell(i,j) {
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true];
    this.show = function() {
        let x = this.i*w;
        let y = this.j*w;
        stroke(255);
        if (this.walls[0]) {
          line(x  ,  y,x+w,  y); //top line
        }
        if (this.walls[1]) {
          line(x+w,  y,x+w,y+w); //right line
        }
        if (this.walls[2]) {
          line(x+w,y+w,  x,y+w); //bottom line
        }
        if (this.walls[3]) {
          line(x  ,y+w,  x,  y); //left line
        }
    };
}