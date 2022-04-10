Vue
  .createApp({
    data() {
      return {
        message: ''
      };
    }
  })
  .component('my-input', {
    props: [ 'modelValue' ],
    emits: [ 'update:modelValue' ],
    template: `<label>
      名前：
      <input type="text" v-model="internalValue" />
    </label>`,
    setup(props, context) {
      const internalValue = Vue.computed({
        get() {
          return props.modelValue;
        },
        set(value) {
          if (props.modelValue !== value) {
            context.emit('update:modelValue', value);
          }
        }
      },{
        onTrack(e) {
          console.log(`${e.type}: ${e.key}`);
          console.log(e);
        },
        onTrigger(e) {
          console.log(`${e.type}: ${e.key}`);
          console.log(e);
        }
      });
      return {
        internalValue
      };
    }
  })
  .mount('#app');