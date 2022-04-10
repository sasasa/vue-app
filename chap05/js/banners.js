Vue
  .createApp({
    created() {
      this.interval = setInterval(() => {
        this.current = (this.current + 1) % this.components.length;
      }, 3000);
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    computed: {
      currentBanner() {
        return 'banner-' + this.components[this.current];
      }
    },
    data() {
      return {
        current: 0,
        components: [ 'member', 'new', 'env' ]
      };
    }
  })
  .component('banner-member', {
    template: `<div class="banner">
      <h3>WINGSメンバー募集中！</h3>
      <p>あなたもWINGSプロジェクトに参加しませんか？<br />
        現在、WINGSプロジェクトでは、ご一緒にお仕事ができる仲間を募集中です。</p>
    </div>`
  })
  .component('banner-new', {
    template: `<div class="banner">
      <h3>新刊「独習Ruby 新版」発売</h3>
      <p>基礎からきっちり身に付くRuby入門書。Ruby 3対応<br />
      解説→例題→練習問題（理解度チェック）の3ステップで、基本テクニックを身につけます。</p>
    </div>`
  })
  .component('banner-env', {
    template: `<div class="banner">
      <h3>環境構築設定</h3>
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br />
        紹介している各モジュールは、日々頻繁にバージョンアップが行われています。</p>
    </div>`
  })
  .mount('#app');
