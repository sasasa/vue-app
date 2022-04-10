Vue
  .createApp({
    data() {
      return {
        message: ''
      }
    }
  })
  .component('my-input', {
    props: [ 'modelValue' ],
    emits: [ 'update:modelValue' ],
    template: `<label>
      名前：
      <input type="text" v-model="internalValue" />
    </label>`,
    computed: {
      internalValue: {　
        get() {
          return this.modelValue;
        },
        set(value) {
          if (this.modelValue !== value) {
            this.$emit('update:modelValue', value);
          }
        }
      }
    }
  })
  .mount('#app');