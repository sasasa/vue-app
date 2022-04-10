Vue
  .createApp({
    data() {
      return {
        message: ''
      }
    }
  })
  .component('my-input', {
    props: [ 'str' ],
    emits: [ 'update:str' ],
    template: `<label>
      名前：
      <input
        type="text" v-bind:value="str"
        v-on:input="$emit('update:str', $event.target.value)" />
    </label>`
  })
  .mount('#app');