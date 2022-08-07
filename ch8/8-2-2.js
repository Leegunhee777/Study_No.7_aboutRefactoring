class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}

/*
<필드옮기기, 응집도 높이기>
한 클래스나 모듈이 밀접하게 연관된!! 데이터와 행동들을 담아야한다. 최대한!!!
*/
