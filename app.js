Vue.component('app-username', {
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  data: () => {
    return {
      // name: 'Neevor',
    };
  },
  methods: {
    usernameClicked: function() {
      this.$emit('usrclicked', this.username);
    },
  },
  template:
    '<p  v-on:click="usernameClicked">{{ username }}</p>',
});

new Vue({
  el: '#app',
  data: {
    name: 'Max',
    number: 0,
    elements: [],
  },
  methods: {
    changeName() {
      this.name = 'Manu';
      console.log('Clicked!', this);
    },
    incCounter() {
      this.number += 1;
    },
    decCounter() {
      this.number -= 1;
    },
    addElement() {
      this.elements.push(this.elements.length + 1);
    },
    getColor(number) {
      console.log('Number:', number, typeof number);
      return number % 2 === 0 ? 'blue' : 'red';
    },
    userWasClicked(name) {
      alert(name);
    },
  },
});
