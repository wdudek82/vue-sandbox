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
      const interval = setInterval(() => {
        console.log('progress bar updated:', this.width);
        this.width += 1;
      }, 1000);

      if (this.width >= 100) {
        clearInterval(interval);
      }
    },
  },
});
