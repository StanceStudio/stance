<template>
  <footer class="site-footer absolute w-full">
      <div class="flex flex-wrap justify-between lg:w-11/12 mx-auto py-4 lg:py-8 items-center px-8">
        <nuxt-link to="/" class="logo w-20 lg:w-24 lg:pb-0"><StanceLogo /></nuxt-link>
        <div class="text-xs lg:pb-0 lg:text-xl text-right lg:text-center font-semibold">
          Designing a Sustainable Future Faster
        </div>
        <div class="copy ml-auto mt-3 lg:mt-0 lg:ml-0 mt-2 uppercase font-medium">
          © Stance {{ date }}
        </div>
    </div>
  </footer>
</template>

<script>
import StanceLogo from "~/assets/img/StanceLogo.svg?inline";

export default {
  name: 'footer-prismic',

  components: {
    StanceLogo,
  },

  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.site-footer {
  transform:  translate3d(0,-100%,0);
}
.copy {
  font-size: .5rem;

  @screen lg {
    @apply text-sm;
  }
}
</style>
