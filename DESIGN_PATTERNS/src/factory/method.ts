interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Square implements Shape {
  draw() {
    console.log("Drawing a Square");
  }
}

// Factory class
class ShapeFactory {
  static createShape(type: string): Shape {
    switch (type.toLowerCase()) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

// Client code
const shape1 = ShapeFactory.createShape("circle");
shape1.draw();

const shape2 = ShapeFactory.createShape("square");
shape2.draw();
