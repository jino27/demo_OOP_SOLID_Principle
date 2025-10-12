// Target interface
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// Adaptee
class ThirdPartyPaymentGateway {
  makeTransaction(total: number) {
    console.log(`Processed ₱${total} using Third-Party Gateway`);
  }
}

// "Class Adapter" — extends the adaptee
class PaymentAdapter extends ThirdPartyPaymentGateway implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Adapter: Translating processPayment() → makeTransaction()");
    this.makeTransaction(amount); // directly call since we inherited it
  }
}

// Client
const adapter2: PaymentProcessor = new PaymentAdapter();
adapter2.processPayment(1500);
