let globalCounter = 0; // global variable

class Counter {
  count: number = 0; // instance (local to object)

  increase() {
    let localVariable = 10; // local (method-only)
    this.count++;
    globalCounter++;
    console.log(`Local: ${localVariable}, Instance: ${this.count}, Global: ${globalCounter}`);
  }
}

const c1 = new Counter();
c1.increase(); // Local: 10, Instance: 1, Global: 1
c1.increase(); // Local: 10, Instance: 2, Global: 2
