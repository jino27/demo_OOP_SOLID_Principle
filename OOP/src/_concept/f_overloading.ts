// Overload signatures (declarations only)
function greet(name: string): string;
function greet(name: string, age: number): string;

// Single implementation
function greet(name: string, age?: number): string {
  if (age) return `Hello ${name}, you are ${age} years old.`;
  return `Hello ${name}!`;
}

// ✅ Works
console.log(greet("Rommel"));
console.log(greet("Rommel", 25));


// Example inside the class
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    if (typeof a === "string" && typeof b === "string") return a + b;
    throw new Error("Invalid arguments");
  }
}

const calc = new Calculator();
console.log(calc.add(5, 10));       // 15
console.log(calc.add("Hello, ", "World!")); // Hello, World!

