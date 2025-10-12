interface IWorker {
  work(): void;
  eat(): void;
}

class HumanWorker implements IWorker {
  work(): void {
    console.log("Working hard!");
  }
  eat(): void {
    console.log("Eating lunch!");
  }
}

class RobotWorker implements IWorker {
  work(): void {
    console.log("Working 24/7!");
  }
  eat(): void {
    throw new Error("Robots don’t eat!");
  }
}