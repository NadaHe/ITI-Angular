// create a parent class Shape and inherit from it 4 classes: Circle, Rectangle, Triangle, square 
//shape class has width and height properties, and a method that returns the area of the shape and its perimeter which differs for each shape type

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return super.getArea() / 2;
    }
    getPerimeter() {
        return super.getPerimeter() + 2 * this.height;
    }
}

class Square extends Shape {
    constructor(width) {
        super(width, width);
    }
}

let circle = new Circle(5);
let rectangle = new Rectangle(5, 10);
let triangle = new Triangle(5, 10);
let square = new Square(5);

console.log(circle.getArea());
console.log(circle.getPerimeter());

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

console.log(triangle.getArea());
console.log(triangle.getPerimeter());

console.log(square.getArea());
console.log(square.getPerimeter());
