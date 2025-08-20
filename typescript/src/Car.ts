// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car{
    brand: string;
    model: string;
    year: string;
     constructor(brand: string, model: string, year: string){
        this.brand=brand;
        this.model=model;
        this.year=year;
     }

     display(){
        console.log(` Nhãn hiệu của xe là ${this.brand}, model ${this.model} và năm sản xuât là ${this.year}`)
     }
}

const car= new Car("Hoàng dz","Lambo","2004")