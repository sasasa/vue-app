Vue.createApp({
  data() {
    return {
      songs: [
        {
          title: '赤とんぼ',
          lyrics: '夕焼け小焼けの赤とんぼ...',
          composer: '山田耕作'
        },
        {
          title: '荒城の月',
          lyrics: '春高楼の花の宴 巡る盃影さして...',
          composer: '瀧廉太郎'
        },
        {
          title: 'どんぐりころころ',
          lyrics: 'どんぐりころころ どんぶりこ...',
          composer: '梁田貞'
        },
        {
          title: '七つの子',
          lyrics: '烏 なぜ啼くの 烏は山に...',
          composer: '本居長世'
        },
      ]
    };
  }
}).mount('#app');