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
};
