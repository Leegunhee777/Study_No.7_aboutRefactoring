let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return defaultOwner;
}

/*
<캡슐화>
이런식으로 캡슐화하면안됨
객체를 담고 있는 defaultOwner 변수는 메모리주소!!(ref)를 담고있음
그래서 외부로 getDefaultOwner()함수를 만들어 export하면
객체내의 value값이 변경될수있다.
*/
