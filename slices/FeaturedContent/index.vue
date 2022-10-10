<template>
  <section
    class="section py-20 lg:py-40 flex flex-col items-center px-8 text-center"
  >
    <header class="uppercase lg:text-xl mb-8 lg:mb-12 font-bold tracking-wide">
      <prismic-rich-text :field="slice.primary.subheading" />
    </header>
    <div v-if="slice.primary.image.url" class="lg:w-2/3">
      <prismic-link :field="slice.primary.link">
        <!-- <prismic-image :field="slice.primary.image" class="inline-block"/> -->
        <!-- <img
          v-if="slice.primary.image.url"
          :data-src="slice.primary.image.url"
          class="inline-block lazyload"
          :alt="slice.primary.image.alt"
        /> -->
        <ResponsiveImage :data="slice.primary.image" />
      </prismic-link>
      <prismic-rich-text
        :field="slice.primary.heading"
        class="text-2xl lg:text-6xl font-serif mt-8 lg:mt-14 mb-6"
      />
    </div>
    <div
      class="my-4 lg:text-xl"
      v-if="$prismic.asText(slice.primary.ctaText) !== ''"
    >
      <prismic-link
        :field="slice.primary.link"
        class="border-b border-current pb-1 hover:text-magenta font-bold transition-colors"
      >
        {{ $prismic.asText(slice.primary.ctaText) }}
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
        return {};
      },
    },
  },
};
</script>
