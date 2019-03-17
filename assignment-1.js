Vue.component('app-hobby', {
  props: {
    hobby: {
      type: String,
      default: '',
    },
  },
  methods: {
    hobbyClicked: function() {
      this.$emit('hbyclicked', this.hobby);
    },
  },
  template: '<li v-on:click="hobbyClicked">{{ hobby }}</li>',
});

new Vue({
  el: '#assignment1',
  data: {
    hobbies: [
      'cooking',
      'gaming',
      'playing on instruments',
      'chess',
      'thinking',
    ],
    newHobby: '',
    showMessage: false,
    message: '',
    msgBgColor: '',
  },
  methods: {
    getHobbiesLength() {
      return this.hobbies.length;
    },
    handleHobbySubmit(e) {
      e.preventDefault();

      if (this.newHobby.trim()) {
        this.hobbies.unshift(this.newHobby);
        this.newHobby = '';

        this.messageHandler('added');
      }
    },
    removeHobby(hobbyObj) {
      const index = this.hobbies.indexOf(hobbyObj);

      if (index >= 0) {
        this.hobbies.splice(index, 1);
      }

      this.messageHandler('deleted');
    },
    messageHandler(msg) {
      this.showMessage = true;
      this.message = 'Hobby has been ' + msg;
      this.msgBgColor = msg === 'deleted' ? '#ffbcaf' : '#b9ffc6';

      setTimeout(() => {
        this.showMessage = false;
        this.msgBgColor = '';
        this.message = '';
      }, 1000);
    },
  },
});
