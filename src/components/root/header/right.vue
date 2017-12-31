<template>
  <ul class="nav navbar-nav navbar-right">
    <router-link :to="{ name: 'auth' }" tag="li" exact v-if="!isLogged"><a>Entrar</a></router-link>

    <li class="dropdown" :class="{ open: isOpenUser}" v-if="isLogged">
      <a href="javascript:;" class="dropdown toggle" @click="toggleUserMenu">{{ currentUser.name}} <span class="caret" ></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isOpenUser: false
    }
  },
  computed: {
    ...mapGetters(['isLogged','currentUser'])
  },
  methods: {
    toggleUserMenu() {
      this.isOpenUser = !this.isOpenUser
    }
  }
}
</script>

<style>

</style>
