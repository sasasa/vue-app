Vue.createApp({
  data() {
    return {
      map: new Map([
        ['PHP', 'PHP: Hypertext Preprocessor'],
        ['JSP', 'Jakarta Server Pages'],
        ['ASP', 'Active Server Pages']
      ])
    };
  }
}).mount('#app');