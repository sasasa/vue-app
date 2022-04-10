<template>
  <div id="app">
    メイン：{{mainUpdated}} <br /> 
    サブ：{{subUpdated}} <br />
    <!-- Getters：{{localUpdated}} -->
    <input type="button" value="更新" v-on:click="setUpdated" />
  </div>
</template>

<script>
export default {
  name: 'App',  
  computed: {
    mainUpdated() {
      return this.$store.state.main.updated
    },
    subUpdated() {
      return this.$store.state.sub.updated
    },
    localUpdated() {
      return this.$store.getters['main/localUpdated']
    },
  },
  
  methods: {
    setUpdated() {
      // this.$store.dispatch('globalAction')
      // this.$store.commit('setUpdated')
      this.$store.commit('main/setUpdated')
      this.$store.commit('sub/setUpdated')     
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
