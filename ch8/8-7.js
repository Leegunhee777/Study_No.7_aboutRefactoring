export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

/*
<반복문 쪼개기>

지금 반복문안에서 하는게
1.나이제일 어린사람 찾기
2.totalSalary찾기 
두가지를 하고있다

반복문안에서 많은 로직들을 우겨넣는 사람들이 있는데, 그건 좋은 방식이 아니다 반복문안에 로직을 쪼개자!!

  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  =>
  for(const p of prople){
    if(p.age < youngest) youngest = p.age;
  }
  for(const p of people) {
    totalSalary += p.salary;
  }

  이렇게 하면 이런 반박 있을수있다
  이렇게하면 반복문 복잡도가 N인데  두개로 쪼개면 기존 N 에서 2 * N 이 된거니까
  더 안좋아시는거아니에요????!

  N의 지수가 아닌 상수의곱은 복잡도, 즉 성능 측면에서 전혀 영향을 끼치지못한다
  그냥 반복문 쪼개라!!!
*/
