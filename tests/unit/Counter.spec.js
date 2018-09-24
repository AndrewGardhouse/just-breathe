import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import getters from '@/store/getters';
import Counter from '@/components/Counter';

describe('Counter.vue', () => {
  const fakePropsData = {
    count: 1,
    total: 12,
    name: 'Hold Inhale',
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
});
