import { shallowMount } from '@vue/test-utils';
import FeedbackForm from '@/components/FeedbackForm.vue';

jest.mock('axios', () => ({
  post: jest.fn(() => {
    return Promise.resolve({
      data: {
        code: 200,
        message: 'We received your submission skdjngkdfbkgbdfjsnfds',
        title: 'Thank You!',
        status: 'success',
      }
    })
  })
}));

describe('FeedbackForm.vue', () => {
  let wrapper;
  let feedbackForm;
  let emailInput;
  let commentTextarea;
  let email;
  let comment;

  beforeEach(() => {
    wrapper = shallowMount(FeedbackForm)
    feedbackForm = wrapper.find('form')
    emailInput = feedbackForm.find('#email')
    commentTextarea = feedbackForm.find('#comment')

    email = 'test@email.com';
    comment = 'this is a test comment';

    emailInput.setValue(email);
    commentTextarea.setValue(comment);
  })

  it('can sets email and comment data values', () => {
    expect(wrapper.vm.form.email).toBe(email);
    expect(wrapper.vm.form.comment).toBe(comment);
  });

  it('can submit the message and email', (done) => {
    feedbackForm.trigger('submit');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.form.email).toBe('');
      expect(wrapper.vm.form.comment).toBe('');
      expect(wrapper.vm.formSubmitted).toBeTruthy();

      jest.runTimersToTime(5000);

      expect(wrapper.vm.formSubmitted).toBeFalsy();
      done();
    })
  });
});
