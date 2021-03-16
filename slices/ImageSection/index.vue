<template>
  <section class="section py-16 lg:py-22 lg:w-11/12 mx-auto px-8">
    <prismic-image :field="slice.primary.image" class="w-full"/>
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