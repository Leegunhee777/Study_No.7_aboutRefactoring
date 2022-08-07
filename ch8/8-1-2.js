export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  //_daysOverdrawn 조건을 기반한 내부 함수 응집도 OK
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  //this.type.isPremium 에따라 결과값이 달라지는것이니 AccountType클래스 내부로 옮겨볼까?
  //_daysOverdrawn도 쓰이고있긴한데 여기서 더 중요한 조건으로쓰이는 데이터가 this.type.isPremium 이니까
  //AccountType클래스 내부로 옮겨보자, 근데 내부적으로 _daysOverdrawn도 쓰이고있으니 Account안에 있는게 좋을수도있다.

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    } else return this._daysOverdrawn * 1.75;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }
}
/*
<함수 옮기기, 응집도 높이기>
*/
