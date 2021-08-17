<template>
  <section
    class="
      section
      heading
      py-20
      lg:pt-40
      lg:pb-40
      flex flex-col
      items-center
      px-8
    "
  >
    <prismic-rich-text
      :field="slice.primary.heading"
      :class="
        slice.primary.headingStyle === 'small'
          ? 'heading__h--sm'
          : 'heading__h--lg'
      "
      class="text-center lg:w-2/3"
    />
    <prismic-rich-text
      v-if="$prismic.asText(slice.primary.subheading) !== ''"
      :field="slice.primary.subheading"
      class="links lg:text-xl font-medium leading-relaxed lg:w-7/12 mt-12"
    />
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
<style lang="postcss" scoped>
.heading__h--lg {
  @apply font-serif text-3xl lg:text-6xl lg:leading-tight;
}

.heading__h--sm {
  @apply uppercase lg:text-xl font-bold tracking-wide;
}
</style>