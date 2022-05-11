<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Counter title="Entraron"></Counter> -->
  <!-- <Counter title="Salieron"></Counter> -->
  <!-- <Counter :start=15></Counter> se ponen : para que lo entienda como numero, no como string, es abreviación del v-bind -->
  <Indecision></Indecision>

</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

export default {
  name: 'App', 
  components: {
    // Counter,
    Indecision,
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
