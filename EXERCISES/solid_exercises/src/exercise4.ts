interface IDevice {
  call(): void;
  takePhoto(): void;
}

class LandlinePhone implements IDevice {
  call() { console.log("Calling..."); }
  takePhoto() { throw new Error("Landline cannot take photos"); }
}
