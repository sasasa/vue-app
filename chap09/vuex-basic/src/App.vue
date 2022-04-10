<template>
  <div>
    <input type="button" value="-" v-on:click="minus" />
    {{count}}
    <!-- {{countNumber}} -->    
    <input type="button" value="+" v-on:click="plus" />  
  </div>
</template>

<script>

// import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    } 
  },

  // computed: mapState([ 'count' ]),

  // computed: mapState({
  //   countNumber: 'count'
  // }),

  methods: {
    minus() {
      this.$store.commit('minus')
    },
    plus() {
      this.$store.commit('plus')
    }
  }
  // methods: mapMutations([ 'plus', 'minus' ]),
}


// Composition APIの場合
// import { computed } from 'vue'
// import { useStore } from 'vuex'

// export default {
//   setup() {
//     const store = useStore()
//     const count = computed(() => store.state.count)
//     const minus = () => { store.commit('minus') }
//     const plus = () =>  { store.commit('plus') }
//     return { count, minus, plus }
//   }
// }
</script>
