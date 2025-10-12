class Discount {
  getDiscount(type: string): number {
    if (type === "gold") return 20;
    if (type === "silver") return 10;
    return 0;
  }
}