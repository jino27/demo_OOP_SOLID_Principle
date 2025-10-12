// Open-Closed Principle

interface IDiscount {
  getDiscount(): number;
}

class GoldDiscount implements IDiscount {
  getDiscount(): number {
    return 20;
  }
}

class SilverDiscount implements IDiscount {
  getDiscount(): number {
    return 10;
  }
}

class DiscountCalculator {
  calculate(discount: IDiscount): number {
    return discount.getDiscount();
  }
}

// Demo
const calculator = new DiscountCalculator();
console.log(calculator.calculate(new GoldDiscount()));  // 20
console.log(calculator.calculate(new SilverDiscount())); // 10