// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(value) {
    //_discount를  set하기위한 setter에서 _discountedTotal까지 업데이트한다??!! 이건 고약한냄새가난다
    //이사람은 이런생각이였을것이다 discount가 업데이트되니까 그에대한 total값도 변할거니까 _discountedTotal도 같이 업데이트해줘야
    //싱크가 맞겠지???라고 생각해서 아래처럼 같이 업데이트해줬을것이다!! 구린생각이다!!!
    // _discountedTotal의 getter를 질의함수로 바꾸어 최신 데이터를 가져올수있도록 바꿔보자!!
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._production;
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}

/*
<파생변수를 질의함수로 바꾸기>
*/
