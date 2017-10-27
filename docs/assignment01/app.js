new Vue({
    el: '#exercise',
    data: {
      name: 'Alexis Michaltsis',
      age: '37',
      linkToImage: 'https://vuejs.org/images/logo.png'
    },
    methods: {
      multiplyByThree: function () {
        return this.age * 3;
      },
      randomNumber: function() {
        return Math.random();
      }
    }
});