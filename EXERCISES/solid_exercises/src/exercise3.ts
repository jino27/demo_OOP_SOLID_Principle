class Vehicle {
  startEngine() {
    console.log("Engine started!");
  }
}

class Bicycle extends Vehicle {
  startEngine() {
    throw new Error("Bicycles don’t have engines!");
  }
}
