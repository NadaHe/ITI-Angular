class Shape{
constructor(public length:number , public width:number){}

calcperimeter(){
    return 2*(this.length+this.width);
}
calcarea(){
    return this.length*this.width;
}
}

class Rectangle extends Shape{
    constructor(public length:number , public width:number){
        super(length,width);
    }
}

let rectangle = new Rectangle(10,20);
console.log(rectangle.calcperimeter());
console.log(rectangle.calcarea());

// tsc task.ts --target es6 --watch