const messages = {
  en: {
    greet: {
      morning: 'Good Morning.'
    }
  },
  ja: {
    greet: {
      morning: 'おはようございます。'
    }
  },
  de: {
    greet: {
      morning: 'Guten Morgen.'
    }
  }
};

Vue.createApp({})
  .use(
    VueI18n.createI18n({
      locale: 'ja',
      // locale: (navigator.languages && navigator.languages[0]) ||
      //   navigator.language ||
      //   navigator.userLanguage ||
      //   navigator.browserLanguage,
      fallbackLocale: 'en',
      messages,
    })
  )
  .mount('#app');