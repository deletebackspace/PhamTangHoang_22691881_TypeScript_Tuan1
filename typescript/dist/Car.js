"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(` Nhãn hiệu của xe là ${this.brand}, model ${this.model} và năm sản xuât là ${this.year}`);
    }
}
const car = new Car("Hoàng dz", "Lambo", "2004");
//# sourceMappingURL=Car.js.map