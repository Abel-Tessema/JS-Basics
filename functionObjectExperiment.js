const Circle = new Function('a', 'b',
    `
        this.x = a;
        this.y = b;
        this.test = function() {
            console.log('test');
        }
    `);

const circle = new Circle(1, 2);

console.log(circle);