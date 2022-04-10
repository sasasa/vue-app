Vue
  .createApp({
    data() {
      return {
        current_y: '2021',
        current_m: '1',
        current_d: '1',
      }
    }
  })
  .component('my-input', {
    props: [ 'year', 'month', 'day' ],
    template: `<label>
      年：
      <input
        type="text" v-bind:value="year"
        v-on:input="$emit('update:year', $event.target.value)" />
    </label><br />
    <label>
      月：
      <input
        type="text" v-bind:value="month"
        v-on:input="$emit('update:month', $event.target.value)" />
    </label><br />
    <label>
      日：
      <input
        type="text" v-bind:value="day"
        v-on:input="$emit('update:day', $event.target.value)" />
    </label><br />`
  })
  .mount('#app');