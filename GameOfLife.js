var width = 1350
var height = 720
var ctx
var canvas
var board

var fps = 10;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

function setup() {

	canvas = document.getElementById("myCanvas")
	ctx = canvas.getContext("2d")

	ctx.fillStyle = "black"
	ctx.fillRect(0,0,width,height)
	
	board = new Board(width,height)
	board.setup()
	
	//the frog
	board.start(140,50)
	board.start(141,50)
	board.start(140,49)
	board.start(141,49)
	board.start(139,49)
	board.start(142,50)
	
	//the cross
	board.start(150,50)
	board.start(151,50)
	board.start(152,50)
	
	//the forest
	board.start(98,80)
	board.start(97,80)
	board.start(96,80)
	
	board.start(99,79)
	board.start(97,79)
	board.start(95,79)
	
	board.start(98,78)
	board.start(97,78)
	board.start(96,78)
	
	//plane
	board.start(50,8)
	board.start(51,9)	
	board.start(49,10)
	board.start(50,10)
	board.start(51,10)
	
	//cube 1
	board.start(25,25)
	board.start(26,26)	
	board.start(25,26)
	board.start(26,25)

	//cube 2
	board.start(100,25)
	board.start(101,26)	
	board.start(100,26)
	board.start(101,25)
	
	//
	board.start(49,23)
	board.start(48,23)
	board.start(49,24)
	board.start(46,24)
	board.start(45,25)	
	board.start(45,26)
	board.start(45,27)
	board.start(46,28)
	board.start(49,28)
	board.start(49,29)
	board.start(48,29)
	
	//clown
	board.start(200,68)
	board.start(200,69)
	board.start(200,70)
	board.start(201,70)
	board.start(202,70)
	board.start(202,68)
	board.start(202,69)	
}

function draw() {
	
    requestAnimationFrame(draw)

	now = Date.now()
	delta = now - then
	
	if (delta > interval) {

		then = now - (delta % interval)
	
		board.showAlive()
		board.updateNextState()
		board.next()
    }
}

setup()
draw()