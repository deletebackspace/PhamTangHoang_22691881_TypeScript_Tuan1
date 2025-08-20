// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.height=height;
        this.width=width;
    }

    calculate(): number{
        return this.height*this.width;
    }
}

const rectangle= new Rectangle(20,30);
console.log('Diện tích hình tam giác là ',rectangle.calculate());