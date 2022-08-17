class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

/*
<어서션 추가하기>
사용자를 위해서라기 보다는 개발자들이 개발하는 과정에서 실수를 하지않도록
야!! 너 여기서 실수했어!!라고 알려줄수있는 용도로 많이 사용되어진다
but!! assert를 사용하면 앱이 죽어버리므로, 주의해야함!!
단순히 assert처리보다 우아하게 처리해주는게 좋다!!!
*/
