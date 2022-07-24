export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

/*
불필요한 데이터 전부를 인자로 받아올필요는 없다.

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
*/
