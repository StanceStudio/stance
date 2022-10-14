<template>
  <footer class="site-footer absolute w-full">
    <div
      class="mx-auto flex flex-wrap items-center justify-between py-4 px-8 lg:w-11/12 lg:py-8"
    >
      <nuxt-link
        to="/"
        class="logo order-2 w-20 lg:order-1 lg:w-24 lg:pb-0"
        aria-label="Stance Design"
      >
        <StanceLogo />
      </nuxt-link>
      <div
        v-if="logos.length > 0"
        class="order-1 flex w-full items-center justify-center space-x-5 px-6 text-center lg:order-2 lg:w-auto lg:space-x-10"
      >
        <div v-for="(logo, i) in logos" :key="`logo-${i}`">
          <PrismicImage :field="logo.logo" class="w-12 lg:w-auto" />
        </div>
      </div>
      <div
        v-else
        class="order-2 text-right text-xs font-semibold lg:pb-0 lg:text-center lg:text-xl"
      >
        Designing a Sustainable Future Faster
      </div>
      <div
        class="copy order-3 ml-auto mt-3 font-medium uppercase md:mt-0 md:ml-0"
      >
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
