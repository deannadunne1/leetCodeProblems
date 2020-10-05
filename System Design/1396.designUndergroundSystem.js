/*
Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation)

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.

*/

class UndergroundSystem {
  constructor() {
    this.checkIns = {};
    this.travelTimes = {};
  }
  checkIn(id, startStation, t) {
    this.checkIns[id] = { station: startStation, time: t };
    if (!this.travelTimes[startStation]) this.travelTimes[startStation] = {};
  }

  checkOut(id, endStation, t) {
    let [checkIn, routes] = [this.checkIns, this.travelTimes];
    let [startStation, startTime] = [checkIn[id].station, checkIn[id].time];
    if (!routes[startStation][endStation])
      routes[startStation][endStation] = [0, 0];
    routes[startStation][endStation][0] += t - startTime;
    routes[startStation][endStation][1]++;
    delete checkIn[id];
  }

  getAverageTime(startStation, endStation) {
    let route = this.travelTimes[startStation][endStation];
    return route[0] / route[1];
  }
}

//Runtime: 260 ms, faster than 58.30% of JavaScript online submissions
//Memory Usage: 55.4 MB, less than 14.83% of JavaScript online submissions
