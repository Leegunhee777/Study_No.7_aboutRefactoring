export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min([...people].map(p => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
/*
youngestAge 와 totalSalary 함수는 people이라는 데이터를 밀접하게 사용하므로,
이안에서만 사용하므로 응집도가 높다고 생각되어 중첩함수의 형태로 내부에 구현하였으나
만약 다른 곳에서도 필요하다면 외부로 빼고 필요한 데이터를 인자로 받는 형태로 구현하여도된다.
*/
