new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    handleButtonClicked(e) {
      console.log(e);
      alert('Button clicked!');
    },
  },
});
