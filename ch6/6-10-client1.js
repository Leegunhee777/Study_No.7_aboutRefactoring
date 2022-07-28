import { acquireReading, baseRate } from './6-10.js';
import { acquireFuncReading, enrichReading } from './6-10.solution';

//개선 전
const aReading = acquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);

//개선 후
const rawReading = acquireFuncReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
