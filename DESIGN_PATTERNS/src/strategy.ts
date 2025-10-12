interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₱${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₱${amount} using PayPal`);
  }
}

class GCashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₱${amount} using GCash`);
  }
}

// Context
class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}

// Client code
const payment = new PaymentContext(new CreditCardPayment());
payment.executePayment(1000);

payment.setStrategy(new PayPalPayment());
payment.executePayment(500);

payment.setStrategy(new GCashPayment());
payment.executePayment(200);
