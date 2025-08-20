// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name=name;
        this.price=price;
    }


}

// Create an array of Product objects
const products: Product[] = [
  new Product("Laptop", 1200),
  new Product("Mouse", 25),
  new Product("Keyboard", 75),
  new Product("Monitor", 350),
  new Product("Headphones", 99),
];

// Filter products with price > 100
const expensiveProducts: Product[] = products.filter(product => product.price > 100);

// Log the filtered products to the console
console.log("Products with price > 100:");
expensiveProducts.forEach(product => {
  console.log(`- ${product.name}: $${product.price}`);
});