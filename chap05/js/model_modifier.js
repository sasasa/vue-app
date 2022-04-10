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
      modelValue: String,
      modelModifiers: {
        default: () => ({})
      }
    },
    emits: [ 'update:modelValue' ],
    methods: {
      oninput(e) {
        let value = e.target.value
        if (this.modelModifiers.lower) {
          value = value.toLowerCase();
        }
        this.$emit('update:modelValue', value);
      }
    },
    template: `<label>
      名前：
      <input
        type="text" v-bind:value="modelValue"
        v-on:input="oninput" />
    </label>`
  })
  .mount('#app');