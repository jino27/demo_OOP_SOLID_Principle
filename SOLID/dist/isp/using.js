"use strict";
class GoodHuman {
    work() {
        console.log("Working hard!");
    }
    eat() {
        console.log("Eating lunch!");
    }
}
class GoodRobot {
    work() {
        console.log("Working 24/7!");
    }
}
// Demo
const workers = [new GoodHuman(), new GoodRobot()];
workers.forEach(w => w.work());
//# sourceMappingURL=using.js.map