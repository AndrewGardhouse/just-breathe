export default {
  // eslint-disable-next-line
  breathingCycleTime({ inhale, exhale, holdInhale, holdExhale }) {
    return inhale + exhale + holdInhale + holdExhale;
  },
  timeRunning(state) {
    if ((state.currentTime && state.endTime) && state.currentTime.isSameOrBefore(state.endTime)) {
      const totalSeconds = Math.ceil(state.endTime.diff(state.currentTime) / 1000);
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return '00:00';
  },
};
