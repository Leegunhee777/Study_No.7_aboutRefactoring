import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    //number가 음수가 들어오면 앱죽어버린다
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}
