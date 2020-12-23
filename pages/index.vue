<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        mhz_blog
      </h1>
      <button>测试主题色切换</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.getters.theme
    }
  },
  mounted() {
    console.log(this.theme);
  }
}
</script>

<style lang="scss">
$color: red;
.container{
  background: $color;
}

</style>
