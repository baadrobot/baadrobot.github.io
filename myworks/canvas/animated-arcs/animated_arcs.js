var canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth - 17;
// минус 17 чтобы не появлялся скролл
canvas.width = window.outerWidth;
canvas.height = window.innerHeight - 4;
// минус 4 чтобы не появлялся скролл

var c = canvas.getContext("2d");

// создание функции констурктора, которая создает объект Circle
function Circle(x, y, dx, dy, radius) {
	// создание свойств объекта
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	// создание метода объекта
	this.draw = function() {
		// creating of arc
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		c.strokeStyle = "green";
		c.stroke();
	}

	this.update = function() {
		// make the arc bounce
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		// смещение круга
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}
var circle = new Circle();


var circleArray = [];

for (i = 0; i < 125; i++) {
	// Arc's radius, position and velocity
	var radius = (Math.random() * 40) + 2;
							// чтобы не создавался за рамками канваса
	var x = Math.random() * (canvas.width - radius * 2) + radius;
							// чтобы не создавался за рамками канваса
	var y = Math.random() * (canvas.height - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 7;
	var dy = (Math.random() - 0.5) * 5;	

	circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
	// создание новых фреймов/кадров
	requestAnimationFrame(animate);

	// очистка старых фреймов/кадров
	c.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	
}

animate();
