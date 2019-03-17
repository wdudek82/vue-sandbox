new Vue({
  el: '#app',
  data: {
    title: 'Hello!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    name: 'Wojtek',
    age: 37,
    loremPixel: 'http://lorempixel.com/250/250/',
  },
  methods: {
    changeTitle(e) {
      this.title = e.target.value;
    },
    sayHello(name) {
      this.title = `Hello, ${name}!`;
      return this.title;
    },
    randomFloat() {
      return Math.random();
    },
  },
});
