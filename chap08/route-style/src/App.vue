<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" active-class="current">About</router-link>
    <!-- <router-link to="/about" exact-active-class="current">About</router-link> -->
    <!-- <router-link to="/about" replace>About</router-link> -->
    <!-- <router-link to="/about" custom v-slot="{ navigate }">
      <button v-on:mouseover="navigate">About</button>
    </router-link> -->
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

/*
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
*/

.current {
  color: red;
  font-weight: bold;
}
</style>
