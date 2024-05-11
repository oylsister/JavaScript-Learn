// Parent Class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }

    move(speed) {
        console.log(`This ${this.name} is moving at the speed of ${speed} kph`);
    }
}

// Child Class
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} is running`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("Bug", 2, 15);
const fish = new Fish("George", 1, 20);

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

// child class can define their own stuff to use for themselve only
fish.swim();
rabbit.run();
// rabbit.swim(); // will not work.