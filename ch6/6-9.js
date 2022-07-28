const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

/*
<여러 함수를 클래스로 묶기>
객체 reading을 컨트롤하는 함수들이 너무 중구난방으로 퍼져있다.
데이터관리가 힘들다.
클래스로 만들고, 함수들을 클래스 내부로 묶는다
*/
