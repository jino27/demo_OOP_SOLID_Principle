class Person {
  name: string; // instance variable

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("Jhon");
const p2 = new Person("Alex");

console.log(p1.name); // Rommel
console.log(p2.name); // Alex
