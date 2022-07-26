import { getDefaultOwner } from './6-6.js';
import { getClassDefaultOwner } from './6-6.solution.js';
const owner = getDefaultOwner();
owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());

//classOwner의 멤버변수를 private으로 선언하였기때문에
//엘리로 수정이안됨
const classOwner = getClassDefaultOwner();
classOwner.firstName = '엘리';
console.log(classOwner);
console.log(getClassDefaultOwner());
