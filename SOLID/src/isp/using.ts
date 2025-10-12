interface IWorkable {
  work(): void;
}

interface IFeedable {
  eat(): void;
}

class GoodHuman implements IWorkable, IFeedable {
  work(): void {
    console.log("Working hard!");
  }
  eat(): void {
    console.log("Eating lunch!");
  }
}

class GoodRobot implements IWorkable {
  work(): void {
    console.log("Working 24/7!");
  }
}

// Demo
const workers: IWorkable[] = [new GoodHuman(), new GoodRobot()];
workers.forEach(w => w.work());