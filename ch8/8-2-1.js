export class Customer {
  #name;
  #discountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday());
  }

  get discountRate() {
    return this.#discountRate;
  }

  becomePreferred() {
    this.#discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
}
/*
<필드옮기기, 응집도 높이기>
한 클래스나 모듈이 밀접하게 연관된!! 데이터와 행동들을 담아야한다. 최대한!!!
*/
