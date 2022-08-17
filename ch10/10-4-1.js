export function plumages(birds) {
  let map = birds.map(b => [b.name, plumage(b)]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}
export function plumage(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 'average';
    case 'AfricanSwallow':
      return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
    case 'NorwegianBlueParrot':
      return bird.voltage > 100 ? 'scorched' : 'beautiful';
    default:
      return 'unknown';
  }
}
export function airSpeedVelocity(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 35;
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts;
    case 'NorwegianBlueParrot':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

/*
  조건부 로직을 다형성으로 바꾸기

  스위치대신에 다형성을 이용해보자!!
  공통 로직은 부모클래스에 선언
  차이나는 부분은 오버라이딩을 통한 다형성이용!
*/
