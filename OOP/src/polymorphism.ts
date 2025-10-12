// POLYMORPHISM — Same method, different behaviors

class Employee {
  constructor(public name: string, public position: string) {}

  work(): void {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

class Manager extends Employee {
  work(): void {
    console.log(`${this.name} is managing the team.`);
  }
}

// Demo
console.log("\n--- POLYMORPHISM ---");

const emp = new Employee("Alice", "Developer");
const mgr = new Manager("Bob", "Team Lead");

const workers: Employee[] = [emp, mgr];
workers.forEach(w => w.work());
