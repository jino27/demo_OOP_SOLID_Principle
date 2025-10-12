"use strict";
class CorrectBird {
}
class FlyingBird extends CorrectBird {
    move() {
        console.log("Flying");
    }
}
class WalkingBird extends CorrectBird {
    move() {
        console.log("Walking");
    }
}
// Demo
const birds = [new FlyingBird(), new WalkingBird()];
birds.forEach(b => b.move());
//# sourceMappingURL=using.js.map