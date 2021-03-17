<template>
  <section
    class="section bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
    :style="{backgroundImage: `url(${slice.primary.backgroundImage.url})`}"
  >
    <div class="lg:w-1/2 mx-auto px-8">
      <prismic-rich-text
        :field="slice.primary.subheading"
        class="uppercase text-md text-center lg:text-lg mb-8 font-bold tracking-wide"
      />
      <prismic-rich-text
        :field="slice.primary.heading"
        class="transition-transform delay-500 mb-8 text-center text-4xl lg:text-7xl font-serif lg:leading-snug"
      />
      <prismic-rich-text
        :field="slice.primary.text"
        class="text-md text-center lg:text-lg font-medium lg:px-10"
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
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  min-height: 100vh;
}
</style>