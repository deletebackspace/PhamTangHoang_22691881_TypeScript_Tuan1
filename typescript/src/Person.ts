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


class Student extends Person{
    grade : string;
    constructor(name: string, age: number, grade: string){
        super(name,age);
        this.grade=grade;
    }

    display(): string{
         return `Tôi tên là ${this.name}, tôi ${this.age} tuổi và học lớp ${this.grade} `;
  }

}

const student= new Student('hoàngdz',18,'DHKTPM18A')

console.log(student.display());
