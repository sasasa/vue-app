<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/article/10">記事：No.10</router-link> |
    <router-link to="/article/108">記事：No.108</router-link> |
    <!-- <router-link to="/article/108/pages/2">記事：No.108（2P）</router-link> | -->
  </div>
  <router-view/>
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

/* #nav a.router-link-active {
  background-color: Yellow;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
