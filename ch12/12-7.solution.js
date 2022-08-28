class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === 'M';
  }
  static create(recode) {
    switch (record.gender) {
      case 'M':
        return new Person(recode.name, 'M');
      case 'F':
        return new Person(recode.name, 'F');

      default:
        return new Person(recode.name, 'X');
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach(record => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter(p => p.isMale).length;
console.log(numberOfMales);
