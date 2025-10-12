interface IPayment {
  process(amount: number): void;
}

class CreditCardPayment implements IPayment {
  process(amount: number): void {
    console.log(`Processing credit card payment: $${amount}`);
  }
}

class PayPalPayment implements IPayment {
  process(amount: number): void {
    console.log(`Processing PayPal payment: $${amount}`);
  }
}

function checkout(payment: IPayment, amount: number) {
  payment.process(amount);
}

checkout(new CreditCardPayment(), 500);
checkout(new PayPalPayment(), 200);
