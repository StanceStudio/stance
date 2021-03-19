<template>
  <section class="section py-20 lg:pt-40 lg:pb-40 flex justify-center px-8">
    <prismic-rich-text
        :field="slice.primary.heading"
        class="font-serif text-center text-3xl lg:text-6xl lg:leading-tight lg:w-2/3"
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
