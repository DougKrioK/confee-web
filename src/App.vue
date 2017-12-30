<template>
  <div id="app">
    <root-header></root-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import rootHeader from './components/root/header/main.vue'
export default {
  name: 'app',
  components: {
    rootHeader
  }
}
</script>

<style>
</style>
