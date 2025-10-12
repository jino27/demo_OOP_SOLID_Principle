abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move() { console.log("Car is driving"); }
}

class Bicycle extends Vehicle {
  move() { console.log("Bicycle is pedaling"); }
}

const vehicles: Vehicle[] = [new Car(), new Bicycle()];
vehicles.forEach(v => v.move());
