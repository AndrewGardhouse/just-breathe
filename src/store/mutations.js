/* eslint-disable no-param-reassign */
import moment from 'moment';

export default {
  updateTimerValues(state, value) {
    Object.keys(value).forEach((key) => { state[key] = value[key]; });
  },
  toggleIsTimerRunning(state) {
    state.isTimerRunning = !state.isTimerRunning;
  },
  startTimer(state) {
    const timeout = setTimeout(() => {
      const now = moment();
      state.startTime = now.clone();
      state.currentTime = now.clone();
      state.endTime = now.clone().add(state.totalTime, 'm');
      state.interval = setInterval(() => {
        state.currentTime = moment();
      }, 1000);
      clearInterval(timeout);
    }, 3000);
  },
  stopTimer(state) {
    clearInterval(state.interval);
    state.interval = null;
    state.endTime = null;
  },
  toggleShowClock(state) {
    state.showClock = !state.showClock;
  },
};
