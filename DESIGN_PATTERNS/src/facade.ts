// Subsystem classes
class CPU {
  freeze() {
    console.log("CPU: Freeze");
  }

  jump(position: number) {
    console.log(`CPU: Jump to ${position}`);
  }

  execute() {
    console.log("CPU: Execute instructions");
  }
}

class Memory {
  load(position: number, data: number[]) {
    console.log(`Memory: Loading data at ${position} → ${data}`);
  }
}

// Facade
class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();

  startComputer() {
    this.cpu.freeze();
    this.memory.load(0, [0, 1, 2]);
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

// Client code
const computer = new ComputerFacade();
computer.startComputer(); // Simpler interface for complex logic
