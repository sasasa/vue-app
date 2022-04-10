Vue.createApp({
  data() {
    return {
      books: [
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ',
          price: 2800
        },
        {
          isbn: '978-4-8399-6644-7',
          title: 'たのしいラズパイ電子工作ブック',
          price: 1900
        },
        {
          isbn: '978-4-7741-9763-0',
          title: '3ステップでしっかり学ぶ Python入門',
          price: 2480
        },
        {
          isbn: '978-4-7981-5382-7',
          title: '独習C# 新版',
          price: 3600
        }
      ]
    };
  }
}).mount('#app');