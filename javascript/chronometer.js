class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval (() => {
      if (callback) {
        callback();
      };
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)

}
getSeconds() {
return this.currentTime % 60;

}
getMiliSeconds () {
  return this.currentTime % 1000;
}
  computeTwoDigitNumber(value) {
    if ( value < 10) {
      return `0${value}`;
    };
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    clearInterval(this.intervalId)
  }

  split() {
 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
