<template>
  <section
    class="section bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
    :style="{backgroundImage: `url(${slice.primary.backgroundImage.url})`}"
  >
    <prismic-rich-text
      :field="slice.primary.heading"
      class="transition-transform delay-500 lg:w-4/6 mx-auto px-8 text-center text-4xl lg:text-7xl font-serif lg:leading-snug"
    />

    <div class="absolute bottom-0 left-0 w-full text-center my-12 text-2xl font-medium hidden lg:block">
      <prismic-link :field="slice.primary.buttonLink">
        {{ $prismic.asText(slice.primary.buttonText) }}
      </prismic-link>
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
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  min-height: 70vh;
}

.section {
  @screen lg {
    @apply min-h-screen;
  }
}

/* @screen lg {
  .section {
    @apply min-h-screen;
  }
} */
</style>