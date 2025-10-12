class Order {
  createOrder() {
    console.log("Order created.");
  }

  calculateTotal() {
    console.log("Calculating total price...");
  }
}

class InvoicePrinter {
  print(orderId: number) {
    console.log(`Printing invoice for order ${orderId}`);
  }
}

const order = new Order();
order.createOrder();
new InvoicePrinter().print(1);
