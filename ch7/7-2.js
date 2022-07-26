export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
ellie.courses.push(new Course('리팩토링', true));
console.log(ellie.courses.length);

/*
<컬렉션 캡슐화 하기, 컬렉션: 리스트, 배열형태의 것들>
ellie.course 를통해 push하고 delete하고 마음대로 내부value를 어떤 조작이던 마음대로 컨트롤하게된다
이는 굉장히 위험하다 (외부에서 내부 데이터를 마음대로 조작??그것은 위험하다)
*/
