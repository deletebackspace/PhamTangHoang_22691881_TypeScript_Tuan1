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
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    display() {
        return `Tôi tên là ${this.name}, tôi ${this.age} tuổi và học lớp ${this.grade} `;
    }
}
const student = new Student('hoàngdz', 18, 'DHKTPM18A');
console.log(student.display());
//# sourceMappingURL=Person.js.map