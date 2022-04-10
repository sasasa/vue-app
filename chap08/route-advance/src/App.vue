<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/article/10">記事：No.10</router-link> |
    <router-link to="/article/108">記事：No.108</router-link> |
    <!-- <router-link to="/hoge">Hoge</router-link> |
    <router-link to="/hoge#sa">Hoge（サ行）</router-link> |
    <router-link to="/profile">プロフィール</router-link>  -->

  </div>
  <router-view v-slot="{ Component }">
    <component v-bind:is="Component" />
  </router-view>

  <!-- アニメーション -->
  <!-- <router-view v-slot="{ Component }">
    <transition>
      <component v-bind:is="Component" />
    </transition>
  </router-view> -->

  <!-- ルート単位 アニメーション -->
  <!-- <router-view v-slot="{ Component, route }">   
    <transition v-bind:name="route.meta.effect || 'fade-in'">
      <component class="panel" v-bind:is="Component" />
    </transition>
  </router-view> -->

  <!-- 同一コンポーネント間の遷移 -->
  <!-- <router-view v-slot="{ Component, route }">
    <transition>
      <component v-bind:is="Component" v-bind:key="route.path" />
    </transition>
  </router-view> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.v-enter-active, .v-leave-active {
  transition: opacity 5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0.0;
}

/* スライドダウン */
.panel {
  overflow: hidden;
}
 .slide-down-enter-active {
  transition: height 5s;
}

.slide-down-enter-from {
  height: 0px;
}

.slide-down-enter-to {
  height: 180px;
}

/* .slide-down-leave-from {
  height: 180px;
}

.slide-down-leave-to {
  height: 0px;
} */


/* フェードイン */
.fade-in-enter-active {
  transition: opacity 5s;
}

.fade-in-enter-to {
  opacity: 1.0;
}

.fade-in-enter-from {
  opacity: 0.0;
}


</style>
