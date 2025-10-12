class BankAccount {
  private _balance: number = 0;

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this._balance += amount;
  }

  get balance() {
    return this._balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.balance);
