Vue.component('hello', {
  template: '<h2>Hello, World!</h2>',
});

const vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'App 1',
  },
  /* Lifecycle hooks */
  beforeCreate() {
    console.log('beforeCrete()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMound()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
  methods: {
    onClick() {
      console.log('Button clicked:', this.$refs);
      this.$refs.myButton.setAttribute('disabled', 'true');
    },
    destroy() {
      this.$destroy();
    },
  },
});

const vm2 = new Vue({
  data: {
    title: 'App 2',
  },
  methods: {
    onChange() {
      vm1.title = 'Vue Instance 1';
    },
  },
});

vm2.$mount('#app2');

const vm3 = new Vue({
  template: '<h2>Hello!</h2>',
});

vm3.$mount('#app3');
