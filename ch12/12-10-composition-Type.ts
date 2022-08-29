class Printer3 {
  private printerHeader: PrinterHeader;

  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }
  print() {
    this.printerHeader.print();
  }
}

interface PrinterHeader {
  print(): void;
}

class DefaultPrinterHeader implements PrinterHeader {
  print() {
    console.log('기본적인 출력!!!');
  }
}

//RedPrinterHeader 클래스를 규정한다
//interface PrinterHeader를 구현하는 클래스라는것을
class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log('Red 출력!!!');
  }
}

class BlackPrinterHeader implements PrinterHeader {
  print() {
    console.log('Black 출력!!!');
  }
}

const printers3 = [
  new Printer3(),
  new Printer3(new RedPrinterHeader()),
  new Printer3(new BlackPrinterHeader()),
];

printers3.forEach(printer => printer.print());

/*
컴포지션 타입스크립트 버전!
*/
