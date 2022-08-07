class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));
console.log(person.name);
console.log(person.department.manager);
console.log(person.department.chargeCode);

/*
  <중개자 제거하기>
  중개자, 위임, 중간매개체, 중간클래스...동일한말이다. 이것들전부 컴포지션이라고 한다.

  클래스 A안에 모든 코드가 들어있는것이아니라,
  클래스 A안에 B라는 클래스를 컴포지션하다, 가지고있다
  그래서 A클래스는 B클래스를 통해서 원하는 데이터를 가져온다, B라는 중개자를통해서 가져온다

  A라는 클래스에 지나치게 많은 역할들이 들어있다면, 그역할을 나눠서
  B라는 컴포지션!!을 이용할수도있고,

  너무 지나치게 과하게 나눠져있다면 A라는 클래스에 모두 귀속시키는 경우도있다
  이번 챕터는 귀속시키는, 합치는, 컴포지션을 제거하는 경우에 대해서 생각해보겠다
  */
