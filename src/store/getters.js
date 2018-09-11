export default {
  // eslint-disable-next-line
  breathingCycleTime({ inhale, exhale, holdInhale, holdExhale }) {
    return inhale + exhale + holdInhale + holdExhale;
  },
};
