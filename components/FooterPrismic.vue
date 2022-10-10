<template>
  <footer class="site-footer absolute w-full">
    <div
      class="flex flex-wrap justify-between lg:w-11/12 mx-auto py-4 lg:py-8 items-center px-8"
    >
      <nuxt-link
        to="/"
        class="logo w-20 lg:w-24 lg:pb-0"
        aria-label="Stance Design"
      >
        <StanceLogo />
      </nuxt-link>
      <div
        v-if="logos.length"
        class="text-center space-x-5 lg:space-x-10 flex items-center justify-center"
      >
        <div v-for="(logo, i) in logos" :key="`logo-${i}`">
          <PrismicImage :field="logo.logo" />
        </div>
      </div>
      <div
        v-else
        class="text-xs lg:pb-0 lg:text-xl text-right lg:text-center font-semibold"
      >
        Designing a Sustainable Future Faster
      </div>
      <div class="copy ml-auto mt-3 md:mt-0 md:ml-0 uppercase font-medium">
        © Stance {{ date }}
      </div>
    </div>
  </footer>
</template>

<script>
import StanceLogo from "~/assets/img/StanceLogo.svg?inline";

export default {
  name: "footer-prismic",

  components: {
    StanceLogo,
  },

  data() {
    return {
      date: new Date().getFullYear(),
      logos: [],
    };
  },

  async fetch() {
    const page = (await this.$prismic.api.getSingle("footer")).data;

    this.logos = page.logos;

    console.log(page);
  },
};
</script>

<style scoped>
.site-footer {
  transform: translate3d(0, -100%, 0);
}
.copy {
  font-size: 0.5rem;

  @screen lg {
    @apply text-sm;
  }
}
</style>
