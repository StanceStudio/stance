<template>
  <section
    class="section"
    :class="[slice.primary.width === 'full_width' ? 'w-full' : 'lg:w-11/12 mx-auto px-8 py-16 lg:py-20']">
    <prismic-image :field="slice.primary.image" class="w-full"
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
        return {}
      },
    },
  },
}
</script>