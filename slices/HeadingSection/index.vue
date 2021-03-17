<template>
  <section class="section py-20 lg:py-20 flex justify-center px-8">
      <h2 class="font-serif text-center text-3xl lg:text-6xl lg:leading-tight lg:w-2/3">{{ $prismic.asText(slice.primary.heading) }}</h2>
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
