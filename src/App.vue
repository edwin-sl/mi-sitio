<template>
  <div id="app" class="nav">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav class="navbar" id="nav">
      <router-link class="nav-link" to="/">Hello</router-link>
      <router-link class="nav-link" to="/todos">Tareas</router-link>
      <router-link class="nav-link" to="/create">Crear</router-link>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

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
