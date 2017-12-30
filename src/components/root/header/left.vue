<template>
  <ul class="nav navbar-nav">
    <router-link :to="{ name: 'dashboard.main' }" tag="li" exact><a>Home</a></router-link>
    <router-link :to="{ name: 'auth' }" tag="li" exact><a>Entrar</a></router-link>
  </ul>
</template>

<script>
export default {

}
</script>
