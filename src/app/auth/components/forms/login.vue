<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="user.email" class="form-control">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="user.password" class="form-control">
      </div>
      <button class="btn btn-default" type="submit" :disabled="!isValid" @click="doLogin">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin () {
      const user = this.user

      // repasso o usuário pro vuex
      this.attemptLogin({...user})
        .then(() => {
          this.$router.push('/')
        })
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>

<style>

</style>
