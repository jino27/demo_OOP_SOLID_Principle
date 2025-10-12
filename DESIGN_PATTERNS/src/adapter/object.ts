// Target interface (our system expects this)
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// Adaptee (third-party class)
class ThirdPartyPaymentGateway {
  makeTransaction(total: number) {
    console.log(`Processed ₱${total} using Third-Party Gateway`);
  }
}

// Object Adapter — uses composition
class PaymentAdapter implements PaymentProcessor {
  private gateway: ThirdPartyPaymentGateway;

  constructor(gateway: ThirdPartyPaymentGateway) {
    this.gateway = gateway;
  }

  processPayment(amount: number): void {
    console.log("Adapter: Translating processPayment() → makeTransaction()");
    this.gateway.makeTransaction(amount);
  }
}

// Client
const gateway = new ThirdPartyPaymentGateway();
const adapter1: PaymentProcessor = new PaymentAdapter(gateway);
adapter1.processPayment(1500);
