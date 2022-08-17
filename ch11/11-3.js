// 예제 1
function setDimension(name, value) {
  if (name === 'height') {
    this._height = value;
    return;
  }
  if (name === 'width') {
    this._width = value;
    return;
  }
}

// 예제 2
class Concert {
  book(customer, isPremium) {}
}

// 예제 3
function setSwitch(on);

/*
<플래그 인수 제거하기> : boolean값을 인수로 넘기는것, 인수를 boolean으로 넘기면
함수의 의도에 대해 파악하기 어렵기 때문
*/