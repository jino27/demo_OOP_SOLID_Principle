class Shape {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

class AreaCalculator {
  getArea(shape: Shape) {
    if (shape.type === "square") return 4 * 4;
    if (shape.type === "circle") return Math.PI * 3 * 3;
    return 0;
  }
}
