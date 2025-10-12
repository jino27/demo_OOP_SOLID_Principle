// INHERITANCE — Reuse code by extending a base class

class Person {
  constructor(public name: string) {}

  introduce(): void {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

class Employee extends Person {
  constructor(name: string, public position: string) {
    super(name);
  }

  work(): void {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

// 🧪 Demo
console.log("\n--- INHERITANCE ---");
const employee = new Employee("Alice", "Developer");
employee.introduce();
employee.work();
