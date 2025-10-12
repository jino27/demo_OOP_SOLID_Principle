class Person {
  private _age: number = 0; // private variable

  // Getter
  get age(): number {
    return this._age;
  }

  // Setter
  set age(value: number) {
    if (value < 0) {
      console.log("Age cannot be negative.");
      return;
    }
    this._age = value;
  }
}

const person = new Person();
person.age = 25; // uses setter
console.log(person.age); // uses getter -> 25

person.age = -5; // invalid -> Age cannot be negative
console.log(person.age); // still 25
