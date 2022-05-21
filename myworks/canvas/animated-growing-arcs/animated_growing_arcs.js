var canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth - 17;
// минус 17 чтобы не появлялся скролл
canvas.width = window.outerWidth;
canvas.height = window.innerHeight - 4;
// минус 4 чтобы не появлялся скролл

var c = canvas.getContext("2d");

// Создание объекта со свойствами
var mouse = {
	x: undefined,
	y: undefined 
}

var maxRadius = 30;
var minRadius = 2;

var colorArray = [
	"#2C3E50",
	"#E74C3C",
	"#ECF0F1",
	"#3498DB",
	"lightgreen",
	"pink",
	"purple"
];





/*Создание события с функцией,
которая будет передавать объекту координаты курсора*/
window.addEventListener("mousemove", 
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
});


/*Создание события с функцией,
которая будет вызывать функцию init() при изменении размера браузера*/
window.addEventListener("resize", 
	function() {
		canvas.width = window.outerWidth;
		canvas.height = window.innerHeight - 4;

		init();
});




// создание функции констурктора, которая создает объект Circle
function Circle(x, y, dx, dy, radius) {
	// создание свойств объекта
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	// Создание метода объекта, функция которого будет рисовать круг
	this.draw = function() {
		// creating of arc
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		c.fillStyle = this.color;
		c.fill();
	}

	/*Создание метода объекта, функция которого будет задавать
	отскоки, перемещения, интеравктивность, а так же вызовет метод,
	который фактически нарисует круг */
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

		// Интерактивность кругов (изменение размера)
		if(mouse.x - this.x < 40 && mouse.x - this.x > -40 
			&& mouse.y - this.y < 40 && mouse.y -this.y > -40) {
			if (this.radius < maxRadius) {
				this.radius += 10;
			}			
		} else if (this.radius > this.minRadius) {
			this.radius -= 0.3;
		}

		// Выззов метода, функция которого рисование круга
		this.draw();
	}
}
var circle = new Circle();




// Создание массива с кругами
var circleArray = [];

/*Создание функции,
которая будет закидывать элементы (круги) в массив*/
function init() {
	// При вызове этой функции очистить массив
	circleArray = [];

	for (i = 0; i < 3000; i++) {
	// Arc's radius, position and velocity
	var radius = Math.random() * 5 + 1;
							// чтобы не создавался за рамками канваса
	var x = Math.random() * (canvas.width - radius * 2) + radius;
							// чтобы не создавался за рамками канваса
	var y = Math.random() * (canvas.height - radius * 2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);	

	circleArray.push(new Circle(x, y, dx, dy, radius));
	}
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
init();
