export function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: 'SEP' };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: 'RET' };
    } else {
      // lorem.ipsum(dolor.sitAmet);
      // consectetur(adipiscing).elit();
      // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      // ut.enim.ad(minim.veniam);
      result = someFinalComputation();
      return result;
    }
  }
  return result;
}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}

/*
<중첩 조건문을 보호구문으로 바꾸기>
*보호구문이란?  비정상 조건을 if에서 검사한 다음, 함수에서 바로 빠져 나온다.
정상 조건을 여러 번 중첩으로 검사하는 것이 아니라 비정상 조건을 하나씩 검사하는 검사 구문.

상단으로 끌어올려 바로 return 시켜버리면 중첩조건문을 피할수있다.

위에서의 문제
1. 조건식이 중첩되어있다 ex) if안에 if같은것


*/
