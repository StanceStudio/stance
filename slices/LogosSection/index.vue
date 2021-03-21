<template>
  <section :id="_uid" class="section py-16 lg:py-40 px-8 bg-magenta-light">
    <div class="lg:w-9/12 mx-auto">
      <header v-if="$prismic.asText(slice.primary.heading) !== ''" class="flex justify-center mb-14 lg:mb-24 lg:mt-2">
        <prismic-rich-text :field="slice.primary.heading" class="font-serif text-center text-3xl  lg:text-6xl lg:leading-tight lg:w-2/3" />
      </header>
      <div class="flex flex-wrap items-center justify-between">
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="w-3/12 px-1 lg:px-8 py-6 text-center">    
          <!-- <prismic-image :field="item.logo" class="inline-block"/> -->
          <img
            v-if="item.logo.url"
            :data-src="item.logo.url"
            class="inline-block lazyload"
            :alt="item.logo.alt"
          />
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
