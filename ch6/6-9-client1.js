import { acquireReading, baseRate } from './6-9.js';
import { acquireClassReading } from './6-9.solution.js';

//개선 전
const aReading = acquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);

//개선 후
const readingClass = acquireClassReading();
console.log(readingClass.baseCharge);
