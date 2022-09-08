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

export function refactoPrintOwing(invoice, console, clock) {
  let outstanding = 0;

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = clock.today;
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

class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}

//테스트코드작성을 위한 console 의존성주입
refactoPrintOwing(invoice, console, new Clock());

/*
1. console.log()의 콘솔츌력값을 테스트코드 작성하기 어렵다

2. today의 경우도 new Date()의 영향을 받고있어
언제호출하냐에 따라 값이 달라지니 테스트코드로서의 의미가 없다.

위의 코드를 테스트 가능하게 해보자
의존성 주입을 잘 이용하면 테스트가능한 코드가 된다
*/
