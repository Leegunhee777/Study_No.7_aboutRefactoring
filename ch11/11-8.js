export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
}
/*
<클래스의 생성자를 캡슐화하는 방법, 생성자를 팩터리 함수로 바꾸기>
클래스를 이용하고자하는 사용자는 팩토리함수를 통해 인스턴스를 간편하게 생성할수 있게됨

다른 언어는 private 생성자가 가능하다 다른 언어에선 생성자를 private으로 만들어 생성자를 캡슐화 할수있다.
생성자가 복잡할 때 팩터리 함수를 이용하여 손쉽게 인스턴스를 만드는 방법이있다.
*/
