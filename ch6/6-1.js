export function printOwing(invoice) {
  let outstanding = 0;

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);

/* 
<함수 추출하기>
1. 하나의 함수가 너무 많은 일을하고있다, 함수를 읽으면서 내부코드들을 단계적으로 함수로 추출해 내어야한다.

2.과거엔 함수내 사용되는 지역변수를 최상단에 모두 선언하는 관습이 있었는데,
요즘엔 그렇지 않다, 지역변수는 사용하는 곳에서 최대한 가까운 곳에 선언해준다.

3. 반환이 필요한 값의 경우 outstanding이라는 표현보다는 result라고 표현해라 그래야 해당 변수를 읽었을때,
   아~ 이변수는 결국 반환되는 값인가 보구나를 생각할수있게된다.

=> 가독성이 좋아지고 유지보수성이 높아지게된다.
*/
