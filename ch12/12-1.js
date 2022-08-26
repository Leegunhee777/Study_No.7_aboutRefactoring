// 예시 1
class Employee {}

class Salesperson extends Employee {
  get name() {}
}

class Engineer extends Employee {
  get name() {}
}

// 예시 2
class Party {}

class Department extends Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}
class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}
/*
<메서드 부모클래스로 올리기>

개념!!
상속은 왜하는걸까? 코드의 재사용을 위해
상속의 문제점
1. 딱 하나만 상속이 가능함
2. 부모클래스의 기능 하나만 재사용하고 싶으나 상속을 하면 부모클래스의 모든 것들을 확장하게됨(불필요한 기능까지 상속받게됨)
3. 상속을 잘못 받게되면 족보가 꼬일수 있다
4. 수정이 어렵다 부모클래스의 메소드를 수정하면 자식클래스도 영향을 받게되기 때문

상속보다는 컴포지션(위임)을 더 선호하자!!!!!
*/
