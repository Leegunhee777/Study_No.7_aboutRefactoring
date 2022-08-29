//상속
class Printer {
  print() {
    console.log('기본적인 출력!');
  }
}

class RedPrinter extends Printer {
  print() {
    console.log('Red 출력!!');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach(printer => printer.print());

//컴포지션 (위임, 주입받아서 사용)
class Printer2 {
  #printerDelegate;
  constructor(printerDelegate) {
    this.#printerDelegate = printerDelegate;
  }
  print() {
    this.#printerDelegate
      ? this.#printerDelegate.print()
      : console.log('기본적인 출력');
  }
}

class RedPrinter2 {
  print() {
    console.log('Red 출력!!');
  }
}

const printers2 = [new Printer2(), new Printer2(new RedPrinter2())];
printers.forEach(printer => printer.print());

/*
상속의 단점
1. 다중상속이 안됨, 나는 다른 클래스도 부모로서 상속 받고 싶은데  1개의 부모클래스만 상속이 가능하다
2. 자식클래스가 많을 경우 부모 클래스의 수정 및 확장이 쉽지 않다
*/
/*
컴포지션에대한 설명을 위한것 (상속 보단 컴포지션 선호!!!)
*/
