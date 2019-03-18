new Vue({
  el: '#exercise',
  data: {
    value: 0,
    resetAfter: 5000,
  },
  computed: {
    result() {
      return this.value === 37 ? 'Done' : 'No there yet';
    },
  },
  watch: {
    value(val) {
      setTimeout(() => {
        this.value = 0;
      }, this.resetAfter);
    },
  },
});
