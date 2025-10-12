// ===== 1. Abstract Product Interfaces =====
interface Button {
  paint(): void;
}

interface Checkbox {
  paint(): void;
}

// ===== 2. Concrete Products (Windows) =====
class WindowsButton implements Button {
  paint(): void {
    console.log("Rendering a button in Windows style");
  }
}

class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log("Rendering a checkbox in Windows style");
  }
}

// ===== 3. Concrete Products (MacOS) =====
class MacButton implements Button {
  paint(): void {
    console.log("Rendering a button in MacOS style");
  }
}

class MacCheckbox implements Checkbox {
  paint(): void {
    console.log("Rendering a checkbox in MacOS style");
  }
}

// ===== 4. Abstract Factory Interface =====
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// ===== 5. Concrete Factories =====
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// ===== 6. Client Code =====
class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  render(): void {
    this.button.paint();
    this.checkbox.paint();
  }
}

// ===== 7. Usage =====
function configureApplication(os: string): Application {
  let factory: GUIFactory;

  if (os === "Windows") {
    factory = new WindowsFactory();
  } else if (os === "Mac") {
    factory = new MacFactory();
  } else {
    throw new Error("Unknown OS type");
  }

  return new Application(factory);
}

// Client selects which family of UI to use
const app1 = configureApplication("Windows");
app1.render();

const app2 = configureApplication("Mac");
app2.render();
