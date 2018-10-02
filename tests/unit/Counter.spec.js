import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import getters from '@/store/getters';
import Counter from '@/components/Counter';

describe('Counter.vue', () => {
  const propsData = {
    count: 4,
    total: 12,
  };

  it('should required props', () => {
    // https://github.com/vuejs/vue-test-utils/issues/704
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    const wrapper = shallowMount(Counter, {
      propsData: {},
      computed: {
        totalRange() {
          return Array.from(Array(propsData.total + 1).keys());
        }
      }
    });
    expect(spy).toBeCalled();
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
    spy.mockRestore();
  });

  it('should show the correct <span>s that matches the `count` prop', () => {
    const wrapper = shallowMount(Counter, {
      propsData,
    });

    const spans = wrapper.findAll('.counter__number');

    expect(spans.length).toBe(1);
  });

  it('should have a `totalRange` computed property that creates an array with the numbers 0 to props total', () => {
    const wrapper = shallowMount(Counter, {
      propsData: {
        ...propsData,
        total: 4,
      },
    });

    expect(wrapper.vm.totalRange).toEqual([0,1,2,3,4]);
  });

  it('should show the name when there is a `name` prop and the `count` prop is 0', () => {
    const name = 'Inhale';
    const wrapper = shallowMount(Counter, {
      propsData: {
        ...propsData,
        count: 0,
        name,
      },
    });

    const span = wrapper.find('span');

    expect(span.text()).toBe(name);
  });
});
