Vue.createApp({})
  .component('my-teleport', {
    data() {
      return {
        show: false
      }
    },
    template: `
      <form>
        <input type="button" v-on:click="onclick(true)"
          value="ダイアログを開く" />
      </form>
      <teleport to="#popup">
        <div id="my-dialog" class="dialog" v-if="show">
          <p>独自のダイアログです。</p>
          <input type="button" v-on:click="onclick(false)" value="閉じる" />
        </div>
      </teleport>
    `,
    methods: {
      onclick(flag) {
        this.show = flag;
      }
    }
  })
  .mount('#app');