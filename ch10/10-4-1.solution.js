class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return 'unknown';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }

  get plumage() {
    return this.numberOfCoConuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoConuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super('AfricanSwallow');
  }
  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

//인자로 인스턴스를 넘겨준다.
export function plumages(birds) {
  let map = birds.map(b => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map(b => [b.name, b.airSpeedVelocity]));
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
