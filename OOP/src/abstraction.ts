// ABSTRACTION — Hide complex logic behind simple methods

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class PaymentProcessor {
  processPayment(account: BankAccount, amount: number): void {
    console.log("Processing payment...");
    account.withdraw(amount); // hides the logic of deduction
    console.log(`Payment of ₱${amount} processed!`);
  }
}

// Demo
const account = new BankAccount(1000);
const payment = new PaymentProcessor();

console.log("\n--- ABSTRACTION ---");
payment.processPayment(account, 300);
console.log("New Balance:", account.getBalance());
