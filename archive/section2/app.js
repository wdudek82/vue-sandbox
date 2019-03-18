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

      setTimeout(() => (vm.counter = 0), 2000);
    },
  },
  methods: {
    updCounter() {
    },
  },
});

new Vue({
  el: '#app2',
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: 'green',
    hex: '#ccc',
    rounded: 'rounded',
    range: 0,
  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    computedStyles() {
      return {
        background: this.hex,
        borderRadius: `${this.range}%`,
      };
    },
  },
});
