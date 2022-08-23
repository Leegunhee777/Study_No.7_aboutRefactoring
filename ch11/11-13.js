const values = [];
function getValueForPeriod(periodNumber) {
  const value = values[periodNumber];
  if (!value) {
    throw new Error('value is undefined');
  }
  return value;
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log('에러 발생!');
}

/*
<예외를 사전확인으로 바꾸기>
진짜 오류라고할수있는 예외인지, 예상가능한 예외인지 구분할필요가있음
getValueForPeriod함수 내부에서의  throw new Error('value is undefined');는
충분히 예상가능한 예외이기때문에 예외처리를 남용하는 케이스라고 볼수있다
*/
