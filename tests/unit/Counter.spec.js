import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import getters from '@/store/getters';
import Counter from '@/components/Counter';

describe('Counter.vue', () => {
  const propsData = {
    count: 4,
    total: 12,
    name: 'Inhale',
  };

  it('should required props', () => {
    // https://github.com/vuejs/vue-test-utils/issues/704
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    const wrapper = shallowMount(Counter, {
      propsData: {},
    });
    expect(spy).toBeCalled();
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
    spy.mockRestore();
  });

  it('should show the correct <span>s that matches the `count` prop', () => {
    const wrapper = shallowMount(Counter, {
      propsData,
    });

    const spans = wrapper.findAll('span');

    expect(spans.length).toBe(1);
  });
});
