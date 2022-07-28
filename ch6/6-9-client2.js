import { acquireReading, baseRate } from './6-9.js';
import { acquireClassReading } from './6-9.solution.js';
//개선 전
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;

function taxThreshold(year) {
  return 0.1;
}

export const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

//개선 후
const readingClass = acquireClassReading();
const taxableCharge = readingClass.taxableCharge;
