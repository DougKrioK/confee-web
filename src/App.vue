<template>
  <div id="app">
    <root-header></root-header>
    <div class="container">
      <header class="page-header">
        <h2>Olá</h2>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import rootHeader from './components/root/rootHeader'
export default {
  name: 'app',
  components: {
    rootHeader
  }
}
</script>

<style>
</style>
