class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
    greet(): string {
    return `Tôi tên là ${this.name} và tôi ${this.age} tuổi.`;
  }

}
const person = new Person("Hoàng dz",21);
console.log(person.greet());
