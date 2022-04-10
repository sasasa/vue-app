Vue
  .createApp({
    data() {
      return {
        message: ''
      }
    }
  })
  .component('my-input', {
    props: {
      str: String,
      strModifiers: {
        default:  () => ({})
      }
    },
    emits: ['update:str'],
    methods: {
      oninput(e) {
        let value = e.target.value
        if (this.strModifiers.lower) {
          value = value.toLowerCase();
        }
        this.$emit('update:str', value);
      }
    },
    template: `<label>
      名前：
      <input
        type="text" v-bind:value="str"
        v-on:input="oninput" />
    </label>`
  })
  .mount('#app');