var canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth - 17;
// минус 17 чтобы не появлялся скролл
canvas.width = window.outerWidth;
canvas.height = window.innerHeight - 4;
// минус 4 чтобы не появлялся скролл

var c = canvas.getContext("2d");

// Arc

var x = 200;
var dx = 5;
var y = 200;
var dy = 4;
var radius = 30;

function animate() {
	// создание новых фреймов
	requestAnimationFrame(animate);

	// очистка старых фреймов
	c.clearRect(0, 0, canvas.width, canvas.height);

	// creating arc
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2);
	c.fillStyle = "rgba(119, 255, 169, 0.5)";
	c.fill();
	c.strokeStyle = "rgb(119, 255, 169)";
	c.stroke();

	// make the arc bounce
	if (x + radius > canvas.width || x - radius < 0) {
		dx = -dx;
	}

	if (y + radius > canvas.height || y - radius < 0) {
		dy = -dy;
	}

	// смещение круга
	x += dx;
	y += dy;	
}

animate();
