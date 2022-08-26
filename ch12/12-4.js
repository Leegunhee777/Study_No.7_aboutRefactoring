class Employee {
  get quota() {}
}

class Engineer extends Employee {}
class Salesperson extends Employee {}

/*
<메서드 자식클래스로 내리기>
특정 자식클래스에서만 쓰이는 메소드라면 특정 자식클래스내부에서 구현하는게 맞다
*/
