<template>
  <section
      class="section lg:px-8 py-16 lg:py-22"
      >
      <div 
        :style="[{backgroundImage: `url(${slice.primary.image.url})`}]"
        :class="[`bg-${slice.primary.backgroundColor}`]"
        class="blockquote lg:w-11/12 mx-auto py-24 bg-cover bg-center bg-no-repeat flex flex-column items-center justify-center"
        >
        <figure class="text-center w-10/12 mx-auto">
          <blockquote class="font-serif text-3xl lg:text-5xl leading-tight mb-8">"{{ $prismic.asText(slice.primary.quote) }}"</blockquote>
          <figcaption v-if="$prismic.asText(slice.primary.caption) != ''" class="font-sm lg:text-2xl font-bold">{{ $prismic.asText(slice.primary.caption) }}</figcaption>
        </figure>
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
.blockquote {
  min-height: 45rem;
}
</style>