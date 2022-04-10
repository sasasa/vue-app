Vue.createApp({
  data() {
    return {
      message: ''
    };
  },
  methods: {
    onchange() {
      const fl = this.$refs.upfile.files[0];
      const data = new FormData();
      data.append('upfile', fl, fl.name);
      fetch('upload.php', { 
        method: 'POST',
        body: data,
      })
      .then(response => response.text())
      .then(text => {
        this.message = text;
      })
      .catch(error => {
        window.alert(`Error: ${error.message}`);
      });
    }
  }
}).mount('#app');