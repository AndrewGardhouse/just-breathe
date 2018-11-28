import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import Option from '@/components/Option';

const fakePropsData = {
  value: 5,
  minTime: 1,
  maxTime: 12,
  fieldName: 'Hold Inhale',
};

describe('Option.vue', () => {
  it('should required props', () => {
    // https://github.com/vuejs/vue-test-utils/issues/704
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    const wrapper = shallowMount(Option, {
      propsData: {},
      computed: {
        fieldNameSlugified() {
          return 'slugified-field-name';
        },
      },
    });
    expect(spy).toBeCalled();
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
    spy.mockRestore();
  });

  it('fieldNameSlugified should return a slugified fieldName prop', () => {
    const wrapper = shallowMount(Option, {
      propsData: fakePropsData,
    });
    const label = wrapper.find('label');

    expect(label.attributes().for).toBe('hold-inhale');
  });

  it('fieldNameCapitalized should return a string without spaces and first letter capitalized', () => {
    const wrapper = shallowMount(Option, {
      propsData: {
        value: 5,
        minTime: 1,
        maxTime: 12,
        fieldName: 'Hold Inhale Test',
      },
    });

    expect(wrapper.vm.fieldNameCapitalized).toBe('HoldInhaleTest');
  });

  it('slider label displays the correct text', () => {
    const wrapper = shallowMount(Option, {
      propsData: fakePropsData,
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

  it('triggers updateTimerValue action on updateValue()', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const localActions = {
      updateTimerValue: jest.fn(),
    };
    const store = new Vuex.Store({
      state,
      actions: localActions,
    });

    const wrapper = shallowMount(Option, {
      propsData: fakePropsData,
      store,
      localVue,
    });

    const slider = wrapper.find('vueslider-stub');

    slider.vm.$emit('callback', 4);

    expect(localActions.updateTimerValue).toHaveBeenCalled();
  });

  it('updateTimerValue action updates holdInhale state attribute', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
      mutations,
    });

    const wrapper = shallowMount(Option, {
      propsData: {
        value: state.holdInhale,
        minTime: 0,
        maxTime: 12,
        fieldName: 'Hold Inhale',
      },
      store,
      localVue,
    });

    const slider = wrapper.find('vueslider-stub');

    slider.vm.$emit('callback', 4);

    expect(state.holdInhale).toBe(4);
  });

  it('updateTimerValue action updates the holdExhale state attribute', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
      mutations,
    });

    const wrapper = shallowMount(Option, {
      propsData: {
        value: state.holdExhale,
        minTime: 0,
        maxTime: 12,
        fieldName: 'Hold Exhale',
      },
      store,
      localVue,
    });

    const slider = wrapper.find('vueslider-stub');

    slider.vm.$emit('callback', 4);

    expect(state.holdExhale).toBe(4);
  });

  it('updateTimerValue action updates the inhale state attribute', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
      mutations,
    });

    const wrapper = shallowMount(Option, {
      propsData: {
        value: state.inhale,
        minTime: 0,
        maxTime: 12,
        fieldName: 'Inhale',
      },
      store,
      localVue,
    });

    const slider = wrapper.find('vueslider-stub');

    slider.vm.$emit('callback', 4);

    expect(state.inhale).toBe(4);
  });

  it('updateTimerValue action updates the exhale state attribute', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
      mutations,
    });

    const wrapper = shallowMount(Option, {
      propsData: {
        value: state.exhale,
        minTime: 0,
        maxTime: 12,
        fieldName: 'Exhale',
      },
      store,
      localVue,
    });

    const slider = wrapper.find('vueslider-stub');

    slider.vm.$emit('callback', 4);

    expect(state.exhale).toBe(4);
  });
});
