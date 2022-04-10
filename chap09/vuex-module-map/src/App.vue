<template>
  <div id="app">
    メイン：{{mainUpdated}} <br />
    サブ：{{subUpdated}} <br />
    <input type="button" value="更新" v-on:click="onclick" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'

// const { mapState, mapMutations } = createNamespacedHelpers('main')

export default {
  name: 'app',  
  computed: mapState({
    mainUpdated() {
      return this.$store.state.main.updated;
    },
    subUpdated() {
      return this.$store.state.sub.updated;
    },
    updated: state => state.main.updated
  }),
  methods: {    
    onclick() {
      this['main/setUpdated']()
      // this.setUpdated()   
    },
    ...mapMutations([ 'main/setUpdated', 'sub/setUpdated' ])

    // ...mapMutations({
    //   setUpdated: 'main/setUpdated',
    // }),

    // ...mapMutations([ 'setUpdated' ])
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
