<template>
  <section class="section py-16 lg:py-20 lg:w-11/12 mx-auto px-8">
      <header v-if="$prismic.asText(slice.primary.heading) !== ''" class="flex justify-center mb-14 lg:mb-24 lg:mt-2">
        <h2 class="font-serif text-center text-3xl lg:text-6xl lg:leading-tight lg:w-2/3">{{ $prismic.asText(slice.primary.heading) }}</h2>
      </header>
      <div class="lg:flex lg:flex-wrap justify-around -mx-8">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="text-left lg:w-2/6 px-8 lg:px-24 lg:mb-28">    
          <prismic-rich-text :field="item.text" class="text-sm lg:text-xl font-medium leading-relaxed" />
      </div>
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
