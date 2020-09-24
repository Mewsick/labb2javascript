<template>
  <div id="app">
    <Header text="Välj rubrik för bild eller statistik">></Header>
    <router-link to="/HelloWorld">Bild på coronaviruset</router-link><br>
    <router-link to="/Presentation">Statistik</router-link>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
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
