const { Triangle, Circle, Square } = require('./shapes.js')

describe('Circle', () => {
    test('should return a SVG with a circle shape and blue color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
    });
});

describe('Triangle', () => {
    test('should return a SVG with a triangle shape and blue color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150 15, 250 185, 50 185" fill="blue"/>');
    });
});

describe('Square', () => {
    test('should return a SVG with a square shape and blue color', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
    });
});