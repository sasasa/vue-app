Vue.createApp({
    data() {
      return {
        name: '匿名',
        age: 20
      }
    },
    watch: {
      name: 'nameChanged',
      age: [
        function(newValue, oldValue) {
          console.log('age is changed...1');
        },
        function(newValue, oldValue) {
          console.log('age is changed...2');
        }
      ]
    },
    methods: {
      nameChanged(newValue, oldValue) {
        console.log('name is changed.');
      }
    }
  }).mount('#app');
  