export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return 'high' === this.priority || 'rush' === this.priority;
  }
}

//Order클래스의 생성자인자로 받는 priority라는 기본형데이터를 클래스객체로 만들어보자!!
class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
    this.#value = value;
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}
const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(o => o.isHighPriority()).length;
