export default class Book {
  //private을 나타내는 축약기호 #이다
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      reservedCustomer => reservedCustomer.id === customer.id
    );
  }
}

/*
1. 플래스 즉 매개변수가 true or false를 받는 함수는 좋지 않다.

  addReservation(customer, isPriority) {
    this.#reservations.push(customer);
  }
  위처럼 isPriority가 boolean일때, 함수 호출시 저렇게 true, false를 무조건적인 인자로 넘기는방식보다

   addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }
  위처럼 인자를 넣지않으면 default false로 처리하고, true로 넘겨야할때만 인자로 넘기게하는게 더 좋다.
*/
