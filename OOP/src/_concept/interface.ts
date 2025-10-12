interface IAnimal {
  name: string;
  makeSound(): void;
}

class Dog implements IAnimal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}
