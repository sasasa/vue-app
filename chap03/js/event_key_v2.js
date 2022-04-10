new Vue({
  el: '#app',
  data: {
    name: '匿名'
  },
  methods: {
    clear: function() {
      this.name = '';
    }
  }    
});