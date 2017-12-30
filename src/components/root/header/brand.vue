<template>
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" @click="toogle">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <router-link to="/" class="navbar-brand">Confee</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    toogle () {
      this.$emit('toogle')
    }
  }
}
</script>

<style>

</style>
