<template>
  <section
    class="section text-center"
    :class="[
      slice.primary.width === 'full_width'
        ? 'w-full'
        : 'lg:w-11/12 mx-auto px-8 py-16 lg:py-20',
    ]"
  >
    <!-- <prismic-image :field="slice.primary.image" class="w-full" /> -->
    <img
      v-if="slice.primary.image.url"
      :data-src="slice.primary.image.url"
      class="inline-block lazyload"
      :class="{'w-full' : slice.primary.width === 'full_width'}"
      :alt="slice.primary.image.alt"
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