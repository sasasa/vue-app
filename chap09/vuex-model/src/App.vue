<template>
  <div id="app">
    <form>
      <label for="name">氏名：</label>
      <input id="name" type="text" v-model="name" />
      <!-- <input id="name" type="text" v-model="$store.state.name" /> -->
    </form>
    <div>こんにちは、{{ name }} さん！</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    name: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('updateName', value)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
