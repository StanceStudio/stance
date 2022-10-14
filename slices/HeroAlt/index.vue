<template>
  <section
    class="hero section bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
    :style="{ backgroundImage: `url(${slice.primary.backgroundImage.url})` }"
  >
    <div class="lg:w-3/5 mx-auto px-8">
      <prismic-rich-text
        :field="slice.primary.subheading"
        class="hero__subheading opacity-0 transform translate-y-3 uppercase text-center lg:text-lg mb-8 font-bold tracking-wide"
        :class="{ 'translate-y-0 opacity-100': loaded }"
      />
      <prismic-rich-text
        :field="slice.primary.heading"
        class="hero__heading opacity-0 transform translate-y-3 mb-8 text-center text-4xl md:text-6xl xl:text-7xl font-serif lg:leading-tight"
        :class="{ 'translate-y-0 opacity-100': loaded }"
      />
      <prismic-rich-text
        :field="slice.primary.text"
        class="hero__text max-w-prose mx-auto opacity-0 transform translate-y-3 text-center lg:text-lg font-medium lg:px-10 w-full md:w-4/6 lg:w-full"
        :class="{ 'translate-y-0 opacity-100': loaded }"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      loaded: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 250);
  },
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
}

.hero__subheading,
.hero__heading,
.hero__text {
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 650ms;
}

.hero__heading {
  transition-delay: 250ms;
}

.hero__text {
  transition-delay: 500ms;
}

.hero__text {
  transition-duration: 1000ms;
}
</style>
