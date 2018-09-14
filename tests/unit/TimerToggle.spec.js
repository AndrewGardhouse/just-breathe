import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import TimerToggle from '@/components/TimerToggle';

describe('Timer.vue', () => {
  let localVue;
  let store;
  let wrapper;
  let startButton;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    store = new Vuex.Store({
      state,
      // state = {
      //   inhale: 5,
      //   exhale: 5,
      //   holdInhale: 0,
      //   holdExhale: 0,
      //   isTimerRunning: false,
      //   interval: null,
      //   startTime: null,
      //   currentTime: null,
      // };
      getters,
      mutations,
    });

    wrapper = shallowMount(TimerToggle, {
      store,
      localVue,
    });

    startButton = wrapper.find('.start-stop');
  });

  it('will start and stop the timer when start/stop button is clicked', () => {
    startButton.trigger('click');
    expect(state.isTimerRunning).toBe(true);
    expect(startButton.text()).toMatch('Stop');

    startButton.trigger('click');
    expect(state.isTimerRunning).toBe(false);
    expect(startButton.text()).toMatch('Start');
  });

  it('should have the total time it has been running', () => {
    expect(state.interval).toBeNull();

    startButton.trigger('click');

    expect(state.interval).toBeDefined();
  });
});
