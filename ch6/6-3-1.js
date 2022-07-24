export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

/*
<변수 추출하기> 
1. 도대체 뭘 return 하고 있는지 이해가 가질 않는다
*/
