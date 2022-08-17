// 예제 1
//함수는 한가지일만해야하는데 And????!! 하나의 함수내에서 왜 두가지 일을하지??이상하네
function totalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}

/*
질의함수와 변경함수 분리하기

사이드이펙트를 없애야함!!
사이드 이펙트란?? 나는 특정함수의 네이밍을 보고 해당 함수를 가져와서사용했는데,
해당 네이밍의 로직 이외의 것들도 해당함수내부에서 처리한다면 
사이드 이펙트가있다!!라고 한다!
*/
