class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}

class Salesperson extends Employee {
  get type() {
    return 'salesperson';
  }
}

class Manager extends Employee {
  get type() {
    return 'manager';
  }
}
const ellie = new Engineer('엘리');
const bob = new Manager('밥');
