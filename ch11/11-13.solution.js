const values = [];
function getValueForPeriod(periodNumber) {
  if (periodNumber < 0 || periodNumber >= values.length) {
    return 0;
  }
  return values[periodNumber];
}

getValueForPeriod(-10);
