function Cell(x, y) {

	this.x = x
	this.y = y
	this.state = 0 // 1 is alive, 0 is dead
	this.nextstate = 0 // 1 is alive, 0 is dead
}


Cell.prototype.updateNextState = function() {
	
	var count = 0
	
	if(up(this.x, this.y)==1)
		count++
	if(upLeft(this.x, this.y)==1)
		count++
	if(upRight(this.x, this.y)==1)
		count++
	if(middleLeft(this.x, this.y)==1)
		count++
	if(middleRight(this.x, this.y)==1)
		count++
	if(down(this.x, this.y)==1)
		count++
	if(downLeft(this.x, this.y)==1)
		count++
	if(downRight(this.x, this.y)==1)
		count++
	
	if(count == 2)
		this.nextstate = this.state
	else if(count == 3)
		this.nextstate = 1
	else
		this.nextstate = 0
}

Cell.prototype.next = function() {

	this.state = this.nextstate
	this.nextstate = 0
}

//-------------------------------------------------------------
function up(x, y) {
	
	if(y-1 > 0) {
		return board.cells[x][y-1].state
	}
	
	return 0
}

function upLeft(x, y) {
	
	if(x-1 > 0 && y-1 > 0) {
		return board.cells[x-1][y-1].state
	}
	
	return 0
}

function upRight(x, y) {
	
	if(x+1 < board.width && y-1 > 0) {
		return board.cells[x+1][y-1].state
	}
	
	return 0	
}

function middleLeft(x, y) {
	
	if(x-1 > 0) {
		return board.cells[x-1][y].state
	}
	
	return 0	
}

function middleRight(x, y) {
	
	if(x+1 < board.width) {
		return board.cells[x+1][y].state
	}
	
	return 0	
}

function down(x, y) {
	
	if(y+1 < board.height) {
		return board.cells[x][y+1].state
	}
	
	return 0		
}

function downLeft(x, y) {
	
	if(x-1 > 0 && y+1 < board.height) {
		return board.cells[x-1][y+1].state
	}
	
	return 0		
}

function downRight(x, y) {
	
	if(x+1 < board.width && y+1 < board.height) {
		return board.cells[x+1][y+1].state
	}
	
	return 0		
}