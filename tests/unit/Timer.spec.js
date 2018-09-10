import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import Timer from '@/components/Timer';

describe('Timer.vue', () => {
  // Start/Stop button starts and stops the timer

  it('will start and stop the timer when start/stop button is clicked', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      mutations,
    });

    const wrapper = shallowMount(Timer, {
      store,
      localVue,
    });

    const startButton = wrapper.find('.start-stop');

    startButton.trigger('click');
    expect(state.isTimerRunning).toBe(true);
    expect(startButton.text()).toMatch('Stop');

    startButton.trigger('click');
    expect(state.isTimerRunning).toBe(false);
    expect(startButton.text()).toMatch('Start');
  });

});
