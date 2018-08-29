export default {
  updateTimerValue(context, obj) {
    context.commit(`update${obj.fieldProperty}`, obj.timeAmount);
  },
};
