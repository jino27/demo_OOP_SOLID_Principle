// Abstract class
abstract class Animal {
  constructor(public name: string) {}

  // abstract method — must be implemented by subclass
  abstract makeSound(): void;

  // normal method — shared logic
  move(): void {
    console.log(`${this.name} is moving...`);
  }
}

// Subclass must implement abstract methods
class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

// Demo
const dog = new Dog("Buddy");
dog.move();       // Buddy is moving...
dog.makeSound();  // Buddy says: Woof!
