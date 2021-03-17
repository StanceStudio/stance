<template>
  <section class="section py-16 lg:py-20 px-8 bg-magenta-light">
    <div class="lg:w-9/12 mx-auto">
      <header v-if="$prismic.asText(slice.primary.heading) !== ''" class="flex justify-center mb-14 lg:mb-24 lg:mt-2">
        <h2 class="font-serif text-center text-3xl  lg:text-6xl lg:leading-tight lg:w-2/3">{{ $prismic.asText(slice.primary.heading) }}</h2>
      </header>
      <div class="flex flex-wrap items-center justify-between">
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="w-4/12 lg:w-3/12 px-4 lg:px-8 py-6 text-center">    
          <prismic-image :field="item.logo" class="inline-block"/>
        </div>
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
