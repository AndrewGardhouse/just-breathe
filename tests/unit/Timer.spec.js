import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import Timer from '@/components/Timer';

describe('Timer.vue', () => {
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

  it('has the total time of a inhale and exhale breath count', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const localState = {
      inhale: 5,
      exhale: 5,
      holdInhale: 0,
      holdExhale: 0,
    };

    const store = new Vuex.Store({
      state: localState,
      getters,
    });

    const wrapper = shallowMount(Timer, {
      store,
      localVue,
    });

    expect(wrapper.vm.$store.getters.breathRoundTime).toBe(10);
  });

});
