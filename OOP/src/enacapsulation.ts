// ENCAPSULATION — Hide internal data using private properties

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Demo
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log("--- ENCAPSULATION ---");
console.log("Final Balance:", account.getBalance());
