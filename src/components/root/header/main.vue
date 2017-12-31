<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <brand @toogle="onToogleMenu"/>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" :class="{ in: isOpen }" id="bs-example-navbar-collapse-1">
        <left/>
        <right/>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import left from './left'
import right from './right'
import brand from './brand'
export default {
  name: 'confee-header',
  components: {
    left,
    brand,
    right
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    onToogleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
