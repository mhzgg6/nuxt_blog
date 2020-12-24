<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        mhz_blog
      </h1>
      <button @click="toggleTheme">测试主题色切换</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  computed: {
    // theme () {
    //   return this.$store.state.theme
    // }
  },
  mounted() {
    const theme = window.localStorage.getItem('THEME')
    this.setTheme(theme || 'default')
  },
  methods: {
    //  测试主题切换
    toggleTheme() {
      const theme = this.$store.state.theme == 'default' ? 'dark' : 'default';
      this.setTheme(theme)
    },
    ...mapMutations({
      setTheme: 'setTheme'
    })
  }
}
</script>

<style lang="scss">
$color: red;
.container{
  width: 100%;
  height: 100%;
  background: $color;
}

</style>
