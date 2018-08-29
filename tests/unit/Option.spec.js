import { shallowMount } from '@vue/test-utils';
import Option from '@/components/Option';

const fakePropsData = {
  value: 5,
  minTime: 1,
  maxTime: 12,
  fieldName: 'Hold Inhale',
}

describe('Option.vue', () => {
  it('should required props', () => {
    // https://github.com/vuejs/vue-test-utils/issues/704
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    const wrapper = shallowMount(Option, {
      propsData: {},
      computed: {
        fieldNameSlugified() {
          return 'slugified-field-name'
        }
      }
    });
    expect(spy).toBeCalled();
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
    spy.mockRestore();
  });

  it('fieldNameSlugified should return a slugified fieldName prop', () => {
    const wrapper = shallowMount(Option, {
      propsData: fakePropsData
    });
    const label = wrapper.find('label')

    expect(label.attributes().for).toBe('hold-inhale')
  });

  it('slider label displays the correct text', () => {
    const wrapper = shallowMount(Option, {
      propsData: fakePropsData
    });
    const renderedLabel = wrapper.find('label');

    expect(renderedLabel.text()).toMatch('Hold Inhale: 5 seconds');
  });

  it('should trigger updateValue() on slider change', () => {
    const wrapper = shallowMount(Option, {
      propsData: fakePropsData,
    });
    const slider = wrapper.find('vueslider-stub');
    wrapper.setMethods({ updateValue: jest.fn() });

    slider.vm.$emit('callback');

    expect(wrapper.vm.updateValue).toBeCalled();
  });
});
