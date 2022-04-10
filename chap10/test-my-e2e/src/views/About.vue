<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form>
      <label for="name">氏名：</label>
      <input type="text" id="name" v-model="name" class="search"/>
      <input type="button" id="send" value="クリック" v-on:click="onclick" />
      <div id="result">{{ result }} </div>
    </form>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      result: ''
    }
  },
  methods: {
    onclick: function () {
      this.result = 'こんにちは、' + this.name + 'さん！';
    }
  }
}
</script>
