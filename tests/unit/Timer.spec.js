import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import getters from '@/store/getters';
import Timer from '@/components/Timer';

describe('Timer.vue', () => {
  let localVue;

  beforeEach(() => {
    // Stub for click sound being played
    window.HTMLMediaElement.prototype.play = () => {};

    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.component('font-awesome-icon', FontAwesomeIcon);
  });

  it('clearCountDown will clear the countDown interval and toggles showCountDown', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    expect(wrapper.vm.showCountDown).toBe.true;
    expect(wrapper.vm.countDownInterval).toBeDefined();

    wrapper.vm.clearCountDown();

    expect(wrapper.vm.showCountDown).toBe.false;
    expect(wrapper.vm.countDownInterval).toBeNull();
  });

  it('startInhaleCount will set the inhale interval and trigger events in the App component', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    expect(wrapper.vm.inhaleInterval).toBeNull();

    wrapper.vm.startInhaleCount();

    expect(wrapper.vm.inhaleInterval).toBeDefined();

    expect(wrapper.emitted().updateTransition).toBeTruthy();
    expect(wrapper.emitted().updateTransition[0]).toEqual([store.state.inhale + 1]);

    expect(wrapper.emitted().toggleInhaleOrExhale).toBeTruthy();
    expect(wrapper.emitted().toggleInhaleOrExhale[0]).toEqual([true]);
  });

  it('when the countDown is done, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    expect(wrapper.vm.countDownInterval).toBeDefined();

    wrapper.setMethods({
      clearCountDown: jest.fn(),
      startInhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      countDown: 0,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearCountDown).toBeCalled();
    expect(wrapper.vm.startInhaleCount).toBeCalled();
  });


  it('when the inhaleCount is done and holdInhale doesnt equal 0, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 0,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearInhale: jest.fn(),
      startExhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      inhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearInhale).toBeCalled();
    expect(wrapper.vm.startExhaleCount).toBeCalled();
  });

  it('when the inhaleCount is done and holdInhale equals 0, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearInhale: jest.fn(),
      startHoldInhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      inhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearInhale).toBeCalled();
    expect(wrapper.vm.startHoldInhaleCount).toBeCalled();
  });

  it('when the holdInhaleCount is done, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearHoldInhale: jest.fn(),
      startExhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      holdInhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearHoldInhale).toBeCalled();
    expect(wrapper.vm.startExhaleCount).toBeCalled();
  });

  it('when the exhaleCount is done and holdExhale doesnt equal 0, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearExhale: jest.fn(),
      startHoldExhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      exhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearExhale).toBeCalled();
    expect(wrapper.vm.startHoldExhaleCount).toBeCalled();
  });

  it('when the exhaleCount is done and holdExhale equals 0, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 0,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearExhale: jest.fn(),
      startInhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      exhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearExhale).toBeCalled();
    expect(wrapper.vm.startInhaleCount).toBeCalled();
  });

  it('when the holdExhaleCount is done, the correct methods should be called', () => {
    const store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    const wrapper = mount(Timer, {
      store,
      localVue,
    });

    wrapper.setMethods({
      clearHoldExhale: jest.fn(),
      startInhaleCount: jest.fn(),
      playClick: jest.fn(),
    });

    wrapper.setData({
      holdExhaleCount: 6,
    });

    expect(wrapper.vm.playClick).toBeCalled();
    expect(wrapper.vm.clearHoldExhale).toBeCalled();
    expect(wrapper.vm.startInhaleCount).toBeCalled();
  });
});
