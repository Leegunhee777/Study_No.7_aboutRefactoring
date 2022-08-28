class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.validateType(type);
    this.#name = name;
    this.#type = type;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

const ellie = new Employee('엘리', 'engineer');
const bob = new Employee('밥', 'manager');

/*
<타입 코드를 서브 클래스로 바꾸기>
기존 코드의 문제점
1. 
constructor(name, type) 어떤 값을 type으로 넘겨줘야 되는 지 모름

2. this.validateType(type); 생성자 로직에 throw new Error 던지는거 안좋음,
validateType 이라는 함수가 필요 없더록 만들자!


*/
