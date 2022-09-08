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


    return this._name;
  }
}

class Child extends Parent {
  qwe() {
    console.log(this._name, '111');
    console.log(super.name, '222');
  }
}

//자식에서 contrutor사용하면 무조건 자식생정자 내부에서 super()로 부모생성자 호출해줘야함
//자식에서 contrutor사용안하면 그냥 defualt로 부모 생성자만 호출됨

//어찌됬던 부모생성자는 호출되는건데 자식클래스의 생성자에서 명시적명시냐 자동으로하냐의 차이
const qwe = new Child('qqq');
console.log(qwe.qwe());
