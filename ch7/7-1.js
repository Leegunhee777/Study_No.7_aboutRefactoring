const organization = { name: 'Acme Gooseberries', country: 'GB' };

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);

/*
<레코드 캡슐화 하기>: 레코드란 key, value 형태의 데이터를 말한다.
organizaion.name = '...'이런식으로 캡슐화되어있지않고, 함수로 organization의 값을 변경하게 방치하는것은
위험하다.
script에서는 Object.freeze를 통해 해당 객체를 동결시킬수도있으나 
캡슐화 하는 방법에 대해 서술해보겠다.
*/
