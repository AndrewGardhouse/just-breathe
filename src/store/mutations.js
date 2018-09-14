import moment from 'moment';

/* eslint-disable */
export default {
  updateHoldInhale(state, value) {
    state.holdInhale = value;
  },
  updateHoldExhale(state, value) {
    state.holdExhale = value;
  },
  updateInhale(state, value) {
    state.inhale = value;
  },
  updateExhale(state, value) {
    state.exhale = value;
  },
  toggleIsTimerRunning(state) {
    state.isTimerRunning = !state.isTimerRunning;
  },
  startTimer(state, obj) {
    state.startTime = moment();
    state.currentTime = moment();
    state.interval = setInterval(() => {
      state.currentTime = moment();
    }, 1000);
  },
  stopTimer(state) {
    clearInterval(state.interval);
    state.interval = null;
  },
};
