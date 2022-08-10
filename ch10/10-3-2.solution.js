export function adjustedCapital(instrument) {
  if (!isEligibleForadjustedCapital(instrument)) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForadjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}

/*
특정한로직을 있는 부분을 하단에 위치시키는게 보기에 좋다.
ex)   (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
같은 로직부분말이다!!!
*/
