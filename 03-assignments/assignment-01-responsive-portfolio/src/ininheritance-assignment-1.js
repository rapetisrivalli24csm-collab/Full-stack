// 1. SINGLE INHERITANCE

class Animal {
    eat() {
        return "Animal eats food.";
    }
}

class Dog extends Animal {
    bark() {
        return "Dog barks.";
    }
}

const dog = new Dog();

console.log("1. SINGLE INHERITANCE");
console.log(dog.eat());
console.log(dog.bark());


// 2. MULTILEVEL INHERITANCE

class LivingThing {
    breathe() {
        return "Living thing breathes.";
    }
}

class Mammal extends LivingThing {
    walk() {
        return "Mammal walks.";
    }
}

class Cat extends Mammal {
    meow() {
        return "Cat meows.";
    }
}

const cat = new Cat();

console.log("\n2. MULTILEVEL INHERITANCE");
console.log(cat.breathe());
console.log(cat.walk());
console.log(cat.meow());


// 3. HIERARCHICAL INHERITANCE

class Vehicle {
    start() {
        return "Vehicle starts.";
    }
}

class Car extends Vehicle {
    drive() {
        return "Car is driving.";
    }
}

class Bike extends Vehicle {
    ride() {
        return "Bike is riding.";
    }
}

const car = new Car();
const bike = new Bike();

console.log("\n3. HIERARCHICAL INHERITANCE");
console.log(car.start());
console.log(car.drive());
console.log(bike.start());
console.log(bike.ride());


// 4. MULTIPLE INHERITANCE USING MIXINS

const CanFly = {
    fly() {
        return "Bird can fly.";
    }
};

const CanSwim = {
    swim() {
        return "Bird can swim.";
    }
};

class Bird {
    eat() {
        return "Bird eats food.";
    }
}

Object.assign(Bird.prototype, CanFly, CanSwim);

const bird = new Bird();

console.log("\n4. MULTIPLE INHERITANCE USING MIXINS");
console.log(bird.eat());
console.log(bird.fly());
console.log(bird.swim());

console.log("\nAll inheritance types were implemented successfully.");
