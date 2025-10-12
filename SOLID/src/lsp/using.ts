abstract class CorrectBird {
  abstract move(): void;
}

class FlyingBird extends CorrectBird {
  move(): void {
    console.log("Flying");
  }
}

class WalkingBird extends CorrectBird {
  move(): void {
    console.log("Walking");
  }
}

// Demo
const birds: CorrectBird[] = [new FlyingBird(), new WalkingBird()];
birds.forEach(b => b.move());