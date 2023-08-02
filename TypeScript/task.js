class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calcperimeter() {
        return 2 * (this.length + this.width);
    }
    calcarea() {
        return this.length * this.width;
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super(length, width);
        this.length = length;
        this.width = width;
    }
}
let rectangle = new Rectangle(10, 20);
console.log(rectangle.calcperimeter());
console.log(rectangle.calcarea());
// tsc task.ts --target es6 --watch
