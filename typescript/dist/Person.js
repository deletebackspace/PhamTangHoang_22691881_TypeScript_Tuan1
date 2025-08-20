"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Tôi tên là ${this.name} và tôi ${this.age} tuổi.`;
    }
}
const person = new Person("Hoàng dz", 21);
console.log(person.greet());
//# sourceMappingURL=Person.js.map