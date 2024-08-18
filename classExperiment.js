class Shape {
    constructor() {
        this.draw = () => console.log('draw');
    }
    constructor(value) {
        this.showSize = () => console.log(value);
    }
    resize() { console.log('resize'); }
}

const shape = new Shape();
shape.draw();
shape.resize();
shape.showSize();