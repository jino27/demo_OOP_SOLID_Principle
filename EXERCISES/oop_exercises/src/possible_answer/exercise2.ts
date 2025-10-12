class Animal {
  constructor(public name: string) {}

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} meows`);
  }
}

const dog = new Dog("Buddy");
dog.eat();
dog.bark();
