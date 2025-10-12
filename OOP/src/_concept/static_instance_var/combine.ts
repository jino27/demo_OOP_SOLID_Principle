class Counter {
  count: number = 0; // instance variable
  static count_static: number = 0; // static variable

  constructor() {
    this.count++; // increments this object's count only
    Counter.count_static++; // increments shared static variable
  }

  getCount() {
    return this.count; // returns this object's count
  }

  static getStaticCount() {
    return Counter.count_static; // returns shared static count
  }
}

// Create 3 objects
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log("Instance counts:");
console.log("c1:", c1.getCount()); // 1
console.log("c2:", c2.getCount()); // 1
console.log("c3:", c3.getCount()); // 1

console.log("Static count:");
console.log(Counter.getStaticCount()); // 3


