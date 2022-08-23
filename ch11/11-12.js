function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else return -23;
}

/*
<오류 코드를 예외로 바꾸기>
-23을 오류의 의미로 사용하고있는데 안좋은방법임
*/
