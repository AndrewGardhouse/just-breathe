export default {
  // eslint-disable-next-line
  breathingRoundTime({ inhale, exhale, holdInhale, holdExhale }) {
    return inhale + exhale + holdInhale + holdExhale;
  },
};
