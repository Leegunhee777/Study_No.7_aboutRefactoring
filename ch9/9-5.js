class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

/*
<값을 참조로 바꾸기>
업데이트되는 인스턴스의 값을 여러곳에서 공유 & 사용하고자하는 니즈가있다면
불변성이 더 안좋다! 오히려 참조값을 이용하는게, 업데이트시 해당 값을 여러곳에서 값을 공유하기에 더 알맞는 상황이 있다!
*/
