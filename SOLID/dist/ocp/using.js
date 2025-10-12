"use strict";
// Open-Closed Principle
class GoldDiscount {
    getDiscount() {
        return 20;
    }
}
class SilverDiscount {
    getDiscount() {
        return 10;
    }
}
class DiscountCalculator {
    calculate(discount) {
        return discount.getDiscount();
    }
}
// Demo
const calculator = new DiscountCalculator();
console.log(calculator.calculate(new GoldDiscount())); // 20
console.log(calculator.calculate(new SilverDiscount())); // 10
//# sourceMappingURL=using.js.map