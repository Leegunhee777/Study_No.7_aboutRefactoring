import fs from 'fs';
console.log(process);
if (!process.argv[2]) {
  throw new Error('파일 이름을 입력하세요');
}

const fileName = `./${process.argv[2]}.json`;
if (!fs.existsSync(fileName)) {
  throw new Error('파일이 존재하지 않습니다');
}

const rawData = fs.readFileSync(fileName);
const orders = JSON.parse(rawData);
if (process.argv.includes('-r')) {
  console.log(orders.filter(order => order.status === 'ready').length);
} else {
  console.log(orders.length);
}

/*
터미널에 
nodemon ch6/6-11-2.js ch6/orders 라고하면 process.argv[2]는 ch6/orders를 의미하게됨

nodemon ch6/6-11-2.js ch6/orders -r 이라 입력하면
process.argv.includes('-r')조건문에 들어가게할수있음

*/
