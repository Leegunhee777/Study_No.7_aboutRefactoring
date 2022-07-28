import _ from 'lodash';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireFuncReading() {
  return reading;
}

export function enrichReading(original) {
  //const result = { ...original };
  //...연산자 or Object.assign 이용할수있음, 허나 얉은복사가되는 단점이있음
  //내부적으로 중첩객체가있다면 ,얉은복사를하면 여전히 해당객체의 메모리참조를 가지고있게됨(그러면안된다)
  //깊은 복사를해야함, lodash를 이용해보자
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );

  return result;
}

function calculateBaseCharge(reading) {
  return baseRate((reading.month, reading.year) * reading.quantity);
}
function taxThreshold() {
  return 0.1;
}
export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
