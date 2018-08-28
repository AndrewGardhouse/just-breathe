import { shallowMount } from '@vue/test-utils';
import TimerOptions from '@/components/TimerOptions';

describe('TimerOptions.vue', () => {
  it('secondPluralFilter method displays the correct text', () => {
    const wrapper = shallowMount(TimerOptions, {
      stubs: ['modal'],
      // these are added because this component is dependant on these computed properties from the Store
      // if these are not included, the test breaks
      // https://forum.vuejs.org/t/testing-with-jest-vue-test-utils-vuex/26060
      computed: {
        inhale() {
          return 5
        },
        exhale() {
          return 5
        },
        heldInhale() {
          return 0
        },
        heldExhale() {
          return 0
        }
      }
    });
    const secondPluralFilter = wrapper.vm.secondPluralFilter;

    expect(secondPluralFilter(0)).toMatch('');
    expect(secondPluralFilter(1)).toMatch('second');
    expect(secondPluralFilter(2)).toMatch('seconds');
  });
});
