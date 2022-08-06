export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  o => 'high' === o.priority || 'rush' === o.priority
).length;

/*
<기본형을 객체로 만들기>
해결해야할 문제
1. orders.filter(
  o => 'high' === o.priority || 'rush' === o.priority
).length; 이 로직 자체가 외부에 있는게 불편하다

*/
