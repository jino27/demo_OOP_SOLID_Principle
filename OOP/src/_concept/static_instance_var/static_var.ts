class Counter {
  static count: number = 0; // static variable

  constructor() {
    Counter.count++; // increment shared count
  }

  static getCount() {
    return Counter.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.getCount()); // 3

