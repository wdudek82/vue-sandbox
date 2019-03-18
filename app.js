new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    output() {
      return this.counter % 2 === 0 ? 'Even' : 'Odd';
    },
  },
  watch: {
    counter(value) {
      const vm = this;

      setTimeout(() => vm.counter = 0, 2000);
    },
  },
  methods: {
    updCounter() {
    },
  },
});
