export function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true;
  }
  let certificationGrade = 'regular';
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = 'low';
    result -= 5;
  }
  // lots more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}

/*
<함수를 명령으로 바꾸기>
객체가 명령1개로만 이루어진 객체를 명령객체라고하고
그 패턴을 커멘드패턴이라한다.

보통 명령객체는 어떠한 행동을 하는
1. "Do" 와
명령을 최소하는 
2. "UnDo" 로
이루어져있다.

*/
