Vue
  .createApp({
    methods: {
      onclick(tab) {
        this.current = tab;
      }
    },
    computed: {
      tabNames() {
        return Object.keys(this.tabs);
      },
      currentTab() {
        return `tab-${this.current}`;
      }
    },
    data() {
      return {
        current: 'member',
        tabs: {
          'member': 'メンバー募集',
          'new': '新刊紹介',
          'env': '環境構築設定'
        }
      };
    }
  })
  .component('tab-member', {
    template: `<div class="tab">
      <p>あなたもWINGSプロジェクトに参加しませんか？<br />
        現在、WINGSプロジェクトでは、ご一緒にお仕事ができる仲間を募集中です。</p>
      <label>名前：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
    </div>`,
    data() {
      return {
        name: ''
      }
    },
    activated() {
      console.log('tab-member is activated!!');
    },
    deactivated() {
      console.log('tab-member is deactivated!!');
    }    
  })
  .component('tab-new', {
    template: `<div class="tab">
    <p>基礎からきっちり身に付くRuby入門書。Ruby 3対応<br />
    解説→例題→練習問題（理解度チェック）の3ステップで、基本テクニックを身につけます。</p>
  </div>`
  })
  .component('tab-env', {
    template: `<div class="tab">
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br />
        紹介している各モジュールは、日々頻繁にバージョンアップが行われています。</p>
    </div>`
  })
  .mount('#app');
