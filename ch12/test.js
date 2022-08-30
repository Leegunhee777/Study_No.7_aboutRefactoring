class Printer {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
  print() {
    console.log('부모 print');
  }
  qwe() {
    console.log('qwe');
  }
}

class Sub extends Printer {
  #location;

  constructor(location) {
    super(3, 'ttttt');
    this.#location = location;
  }
  get location() {
    return this.#location;
  }

  qwe() {
    console.log(super.name);
    console.log('ewq');
  }
}

const printer = new Printer(1, 'asd');
const sub = new Sub('서울');
