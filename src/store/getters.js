import moment from 'moment';

export default {
  // eslint-disable-next-line
  breathingCycleTime({ inhale, exhale, holdInhale, holdExhale }) {
    return inhale + exhale + holdInhale + holdExhale;
  },
  timeRunning(state) {
    let time;
    if (state.currentTime && state.startTime) {
      time = moment(state.currentTime.diff(state.startTime)).format('mm:ss');
    } else {
      time = '00:00';
    }
    return time;
  },
};
