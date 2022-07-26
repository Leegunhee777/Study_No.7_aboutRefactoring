class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber.areaCode = value;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber.number = value;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);

/*
<참조를 값으로 바꾸기!>
참조값이 노출되게되면 외부에서 해당 참조값을통해 내부 값을 변경할수있게되는 대참사가 벌어질수도있음
참조를 값으로 바꿔보자! 불변성 유지라고 생각하면 이해가쉽다!

solution에서 제시한 방식이 setter할때마다 new 새로운 인스턴스가 생성되는데 ,메모리낭비아닌가요?
메모리낭비? 생각하지마 메모리 최적화 생각하지마 아직하지마!!! 정말 문제가된다면 측정후 개선해라

solution방식으로 하면 Person #telephoneNumber의 내부값이 변경될일이없음!!!!
참조를 외부에 노출시키면 외부에서 해당 참조값을 통해 내부 값을 변경시킬수있지만
참조가 아닌 값을 노출시키면 내부값이 예기치않게 변경될 경우가없음
*/
