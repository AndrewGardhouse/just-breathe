import moment from 'moment';

/* eslint-disable */
export default {
  updateTimerValues(state, value) {
    Object.keys(value).forEach((key) => state[key] = value[key]);
  },
  toggleIsTimerRunning(state) {
    state.isTimerRunning = !state.isTimerRunning;
  },
  startTimer(state, obj) {
    setTimeout(() => {
      state.startTime = moment();
      state.currentTime = moment();
      state.interval = setInterval(() => {
        state.currentTime = moment();
      }, 1000);
    }, 3000);
  },
  stopTimer(state) {
    clearInterval(state.interval);
    state.interval = null;
  },
  toggleShowClock(state) {
    state.showClock = !state.showClock;
  },
};
