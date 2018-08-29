import { shallowMount } from '@vue/test-utils';
import Option from '@/components/Option';

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
      propsData: {
        value: 0,
        minTime: 1,
        maxTime: 12,
        fieldName: 'Hold Inhale',
      }
    });
    const label = wrapper.find('label')

    expect(label.attributes().for).toBe('hold-inhale')
  });
});
