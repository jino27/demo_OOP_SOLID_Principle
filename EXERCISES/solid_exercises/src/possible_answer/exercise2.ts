interface Shape {
  area(): number;
}

class Square implements Shape {
  constructor(private side: number) {}
  area() {
    return this.side * this.side;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

function printArea(shape: Shape) {
  console.log("Area:", shape.area());
}

printArea(new Circle(3));
printArea(new Square(4));
