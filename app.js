new Vue({
  el: '#app',
  data: {
    title: 'Hello!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    name: 'Wojtek',
    age: 37,
    loremPixel: 'http://lorempixel.com/250/250/',
    counter: 0,
    x: 0,
    y: 0,
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
    updCounter(e, step) {
      console.log('Event:', e);
      this.counter += step;
    },
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe() {
      alert('Key pressed');
    },
  },
});
