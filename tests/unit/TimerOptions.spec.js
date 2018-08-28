import { shallowMount } from '@vue/test-utils';
import TimerOptions from '@/components/TimerOptions';

describe('TimerOptions.vue', () => {
  it('secondPluralFilter method displays the correct text', () => {
    const wrapper = shallowMount(TimerOptions, {
      stubs: ['modal']
    });
    const secondPluralFilter = wrapper.vm.secondPluralFilter;

    expect(secondPluralFilter(0)).toMatch('');
    expect(secondPluralFilter(1)).toMatch('second');
    expect(secondPluralFilter(2)).toMatch('seconds');
  });
});
