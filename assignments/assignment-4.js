new Vue({
  el: '#exercise',
  data: {
    width: 0,
    progressBar: {
      display: 'inline-block',
      height: '100%',
      background: 'green',
      color: 'green',
    },
  },
  methods: {
    updWidth() {
      const vm = this;
      setInterval(() => {
        vm.width += 1;
      }, 1000);
    },
  },
});
