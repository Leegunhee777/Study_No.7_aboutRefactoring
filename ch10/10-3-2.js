export function adjustedCapital(instrument) {
  let result = 0;
  if (instrument.capital > 0) {
    if (instrument.interestRate > 0 && instrument.duration > 0) {
      result =
        (instrument.income / instrument.duration) *
        anInstrument.adjustmentFactor;
    }
  }
  return result;
}

/*
<중첩 조건문을 보호구문으로 바꾸기>
*보호구문이란?  비정상 조건을 if에서 검사한 다음, 함수에서 바로 빠져 나온다.
정상 조건을 여러 번 중첩으로 검사하는 것이 아니라 비정상 조건을 하나씩 검사하는 검사 구문.

*/
