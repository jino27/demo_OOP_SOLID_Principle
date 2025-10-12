// A simple class representing a person
class Person {
  // properties (fields)
  name: string;
  age: number;

  // constructor — initializes the object
  // Note: you can’t have multiple constructors
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // method — behavior of the object
  introduce(): void {
    console.log(`Hi! My name is ${this.name}, and I am ${this.age} years old.`);
  }

  // method — another behavior
  haveBirthday(): void {
    this.age++;
    console.log(`🎉 Happy Birthday ${this.name}! You are now ${this.age}.`);
  }
}

//  Demo
const person1 = new Person("Rommel", 25);
person1.introduce();     // Output: Hi! My name is Rommel, and I am 25 years old.
person1.haveBirthday();  // Output: 🎉 Happy Birthday Rommel! You are now 26.
