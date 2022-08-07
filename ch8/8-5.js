//before
//인라인 코드를 함수 호출로 바꾸기
let appliesToMass = false;
for (const s of states) {
  if (s === 'MA') appliesToMass = true;
}

//after
let afterAppliesToMass = stated.includes('MA');
