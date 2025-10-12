"use strict";
class HumanWorker {
    work() {
        console.log("Working hard!");
    }
    eat() {
        console.log("Eating lunch!");
    }
}
class RobotWorker {
    work() {
        console.log("Working 24/7!");
    }
    eat() {
        throw new Error("Robots don’t eat!");
    }
}
//# sourceMappingURL=not-using.js.map