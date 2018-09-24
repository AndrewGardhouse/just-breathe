import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import getters from '@/store/getters';
import Timer from '@/components/Timer';

describe('Timer.vue Watchers', () => {
  let localVue;

  beforeEach(() => {
    // Stub for click sound being played
    window.HTMLMediaElement.prototype.play = () => {};

    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.component('font-awesome-icon', FontAwesomeIcon);
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

describe('Timer.vue Methods', () => {
  let localVue;
  let store;
  let wrapper;

  beforeEach(() => {
    // Stub for click sound being played
    window.HTMLMediaElement.prototype.play = () => {};

    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.component('font-awesome-icon', FontAwesomeIcon);

    store = new Vuex.Store({
      state: {
        inhale: 5,
        exhale: 5,
        holdInhale: 5,
        holdExhale: 5,
      },
      getters,
    });

    wrapper = mount(Timer, {
      store,
      localVue,
    });
  });

  it('clearCountDown will clear the countDown interval and toggles showCountDown', () => {
    expect(wrapper.vm.showCountDown).toBe.true;
    expect(wrapper.vm.countDownInterval).toBeDefined();

    wrapper.vm.clearCountDown();

    expect(wrapper.vm.showCountDown).toBe.false;
    expect(wrapper.vm.countDownInterval).toBeNull();
  });

  it('startInhaleCount will set the inhale interval and trigger events in the App component', () => {
    expect(wrapper.vm.inhaleInterval).toBeNull();

    wrapper.vm.startInhaleCount();

    expect(wrapper.vm.inhaleInterval).toBeDefined();

    jest.runTimersToTime(1000);
    expect(wrapper.vm.inhaleCount).toBe(1);

    expect(wrapper.emitted().updateTransition).toBeTruthy();
    expect(wrapper.emitted().updateTransition[0]).toEqual([store.state.inhale + 1]);

    expect(wrapper.emitted().toggleInhaleOrExhale).toBeTruthy();
    expect(wrapper.emitted().toggleInhaleOrExhale[0]).toEqual([true]);
  });

  it('clearInhale sets inhaleCount to 0 and clears inhaleInterval', () => {
    wrapper.vm.startInhaleCount();

    expect(wrapper.vm.inhaleInterval).toBeDefined();

    wrapper.vm.clearInhale();

    expect(wrapper.vm.inhaleInterval).toBeNull();
    expect(wrapper.vm.inhaleCount).toBe(0);
  });

  it('startHoldInhaleCount sets holdInhaleInterval', () => {
    wrapper.vm.startHoldInhaleCount();

    expect(wrapper.vm.holdInhaleInterval).toBeDefined();

    expect(wrapper.vm.holdInhaleCount).toBe(0);

    jest.runTimersToTime(1000);
    expect(wrapper.vm.holdInhaleCount).toBe(1);
  });

  it('clearHoldInhale sets holdInhaleCount to 0 and clears holdInhaleInterval', () => {
    wrapper.vm.startHoldInhaleCount();

    expect(wrapper.vm.inhaleInterval).toBeDefined();

    wrapper.vm.clearHoldInhale();

    expect(wrapper.vm.holdInhaleInterval).toBeNull();
    expect(wrapper.vm.holdInhaleCount).toBe(0);
  });

  it('startExhaleCount will set the exhale interval and trigger events in the App component', () => {
    expect(wrapper.vm.exhaleInterval).toBeNull();

    wrapper.vm.startExhaleCount();

    expect(wrapper.vm.exhaleInterval).toBeDefined();

    jest.runTimersToTime(1000);
    expect(wrapper.vm.exhaleCount).toBe(1);

    expect(wrapper.emitted().updateTransition).toBeTruthy();
    expect(wrapper.emitted().updateTransition[0]).toEqual([store.state.exhale + 1]);

    expect(wrapper.emitted().toggleInhaleOrExhale).toBeTruthy();
    expect(wrapper.emitted().toggleInhaleOrExhale[0]).toEqual([false]);
  });

  it('clearExhale sets exhaleCount to 0 and clears exhaleInterval', () => {
    wrapper.vm.startExhaleCount();

    expect(wrapper.vm.exhaleInterval).toBeDefined();

    wrapper.vm.clearExhale();

    expect(wrapper.vm.exhaleInterval).toBeNull();
    expect(wrapper.vm.exhaleCount).toBe(0);
  });
});
