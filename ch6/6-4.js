export function isDeliveryFree(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

/*
<변수 인라인하기>
1. 굳이 basePrice라는 값을 지정해야하나? 굳이 저렇게 변수를 명시할 필요 없을것같은데?

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}

*/
