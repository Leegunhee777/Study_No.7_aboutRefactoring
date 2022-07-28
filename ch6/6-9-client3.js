import { acquireReading, baseRate } from './6-9.js';
import { acquireClassReading } from './6-9.solution.js';

//개선 전
const aReading = acquireReading();

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

const basicChargeAmount = calculateBaseCharge(aReading);

//개선 후
const readingClass = acquireClassReading();
const basicClassChargeAmount = readingClass.baseCharge;
