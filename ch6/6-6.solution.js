//solution 방식 1
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return { ...defaultOwner };
}

//solution 방식 2
class Person {
  #lastName;
  #fitstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#fitstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#fitstName;
  }
}
let classDefaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getClassDefaultOwner() {
  return classDefaultOwner;
}
/*
<캡슐화>

6-6과 6-6solution 방식1의 차이를 알아야함

우리의 근본객체를 수정할수있는 메모리주소를 담고있는,
defulatOwner를 return 하는게아니라
{...}를 통해 불변성을 지키면서 return 하면
우리근본객체의 수정을 방지할수있음
헌제 ... spread연산자도 단점이있음
얕은복사만 한다는사실임
지금 defaultOwner객체 안에 원시값들만있어서 여기서는 지장없지만
defulatOwner안에 또다른 객체 즉, 중첩객체가있다면
이는 불변성을 지키지못하게되는것이다.


우리의 목적이 defaultOwner객체를 변경불가능하게하며,
객체를 유지하며 반환하고자한다면 클래스를 사용하는것이 좋을수있음
*/
