<template>
  <div>
    <header class="page-header row">
      <h2>Confee [ Auth ]</h2>
    </header>
    <login></login>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import login from './forms/login'
export default {
  name: 'auth',
  components: {
    login
  },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>

<style>

</style>
