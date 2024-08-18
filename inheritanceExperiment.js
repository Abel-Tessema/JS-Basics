function Circle(radius) {
    this.radius = radius;
    this.draw = () => console.log('draw');
}

function Shape() {}

Shape.prototype.duplicate = () => console.log('duplicate');

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const circle = new Circle(5);
circle.draw();
circle.duplicate();
// Shape.duplicate();