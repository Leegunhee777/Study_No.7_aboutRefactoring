export function temperatureAlerts(room, plan) {
  const alerts = [];
  const low = room.daysTempRange.low;
  const high = room.daysTempRange.high;
  if (!plan.withinRange(low, high)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}

/*
<객체 통째로 넘기기>
but 사용하지도 않은 값들이 많이 들어있는 객체를 통쨰로 넘기는 것은 위험할수있다!!!
*/
