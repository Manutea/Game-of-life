function Board(width, height, color) {

	this.width = width/5
	this.height = height/5
	this.color = "white"
	this.cells = new Array(this.width)
}


Board.prototype.setup = function() {
	
	for(var i=0; i<=this.width; i++)
		this.cells[i] = new Array(this.height)

	for(var i=0; i<=this.width; i++)
		for(var j=0; j<=this.height; j++)
			this.cells[i][j] = new Cell(i,j)
}


Board.prototype.start = function(i, j) {
	
	this.cells[i][j].state = 1
}


Board.prototype.updateNextState = function() {
	
	for(var i=0; i<=this.width; i++) {
		for(var j=0; j<=this.height; j++) {

			this.cells[i][j].updateNextState(i,j)
		}
	}
}


Board.prototype.next = function() {
	
	for(var i=0; i<=this.width; i++) {
		for(var j=0; j<=this.height; j++) {

			this.cells[i][j].next()
		}
	}
}


Board.prototype.showAlive = function() {
	
	for(var i=0; i<=this.width; i++) {
		for(var j=0; j<=this.height; j++) {
						
			if(this.cells[i][j].state == 1) {
				ctx.fillStyle = "white"
				ctx.fillRect(i*5,j*5,5,5)
			}
			else{
				ctx.fillStyle = "black"
				ctx.fillRect(i*5,j*5,5,5)
			}
		}
	}
}