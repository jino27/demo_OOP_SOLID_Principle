class BankAccount {
  balance: number = 0;
}

const acc = new BankAccount();
acc.balance = -100;
console.log(acc.balance);
