targetTemperature(aPlan);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature;
  // ...
}
/*
<질의 함수를 매개변수로 바꾸기>
targetTemperature 함수내부에서
thermostat.currentTemperature; 이런식으로 다른 객체에 접근하고있는데,
이런패턴은 심각한 커플링이다 굉장히 좋지않다
이런경우는 질의함수를 매개변수를 바꾸어 넘기는것이 심각한 커플링을 막아줄수있다
*/
