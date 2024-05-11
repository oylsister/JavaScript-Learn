class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pant", 22.99);
const product3 = new Product("Underwear", 15.99);

const total = product1.calculateTotal(salesTax);

product1.displayProduct();
console.log(`Total price with tax: ${total.toFixed(2)}`);

