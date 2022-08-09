function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}

const STANDARD_GRAVITY = 9.81;
function afterPotentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}

/*
<매직 리터럴 바꾸기>
코드에서 위미없는 숫자 9.81 같은 뭔지 모르겠는 숫자를보면 아주 불쾌하다
*/
