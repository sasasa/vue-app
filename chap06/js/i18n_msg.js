const messages = {
  en: {
    greet: {
      morning: 'Good Morning.',
      hello: 'Hello, {name}!',

    }
  },
  ja: {
    greet: {
      morning: 'おはようございます。',
      how_are_you: 'ご機嫌いかがですか。',
      hello: 'こんにちは、{name}さん！',
      // hello: 'こんにちは、{0}さん！',
      morning_set: '@:greet.morning @:greet.how_are_you',
      mail: "wings{'@'}example.com",
    }
  },
  de: {
    greet: {
      morning: 'Guten Morgen.',
      hello: 'Guten Tag, {name}!',
    }
  }
};

Vue.createApp({
    data() {
      return {
        name: '山田'
      }
    }
  })
  .use(
    VueI18n.createI18n({
      locale: 'ja',
      fallbackLocale: 'en',
      messages,
    })
  )
  .mount('#app');