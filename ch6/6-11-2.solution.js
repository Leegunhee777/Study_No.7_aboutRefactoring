import fs from 'fs';

//1.run함수를 만들어서 노드의 process 디펜던시를 제거하였다.
run(process.argv);

//2.사용자에게 입력을 받아옴 -> 유효성 검사

//3.필요한 로직 처리
function run(args) {
  const command = parseCommand(args);
  countOrders(command);
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);

  const filtered = command.countReadyOnly
    ? orders.filter(order => order.status === 'ready')
    : orders;

  console.log(filtered.length);
}
