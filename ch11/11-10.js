export class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

/*
<명령 객체를 함수로 바꾸기>
재사용성을 전혀 고려할 필요가 없는 일시적으로 사용하는 경우 굳이 명령객체로 만들필요없음
왜냐하면 클래스로 만들면 사용할때 매번 인스턴스를만들어, 내부 함수를 호출해야하는데,
재사용되지 않는데 인스턴스를 매번 생성하는것은 불필요한 메모리 낭비가될수있다.
*/
