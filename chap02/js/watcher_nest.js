Vue.createApp({
  data: function() {
    return {
      author: {
        name: '匿名',
        age: ''
      }
    };
  },
  watch: {
    'author.name': function(newValue, oldValue) {
      console.log(`${newValue}/${oldValue}`);   
    }
  }
}).mount('#app');