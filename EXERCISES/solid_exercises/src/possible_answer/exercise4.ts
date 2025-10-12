interface ICallable {
  call(): void;
}

interface ICamera {
  takePhoto(): void;
}

class Smartphone implements ICallable, ICamera {
  call() { console.log("Calling..."); }
  takePhoto() { console.log("Taking photo..."); }
}

class Landline implements ICallable {
  call() { console.log("Calling from landline..."); }
}
