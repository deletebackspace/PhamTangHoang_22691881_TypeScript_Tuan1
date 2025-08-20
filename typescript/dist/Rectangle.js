"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculate() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(20, 30);
console.log('Diện tích hình tam giác là ', rectangle.calculate());
//# sourceMappingURL=Rectangle.js.map