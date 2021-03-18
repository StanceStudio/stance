<template>
  <section class="section pt-20 lg:pt-24 pb-8 lg:pb-8 px-8 text-center" :class="background[slice.primary.backgroundColor]">
    <header>
      <prismic-rich-text
        :field="slice.primary.subheading"
        class="uppercase text-md lg:text-xl mb-12 font-bold tracking-wide"
      />
    </header>
    <div class="flex flex-wrap lg:w-11/12 mx-auto">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="lg:w-1/2 px-2 mb-12 text-center">    
        <prismic-image :field="item.image" class="inline-block" />
        <prismic-rich-text :field="item.heading" class="font-serif text-2xl lg:text-4xl mb-8 mt-8 lg:mt-12 xl:w-4/5 mx-auto leading-snug" />
        <div class="my-4 text-sm lg:text-xl" v-if="$prismic.asText(item.ctaText) !==''">
          <prismic-link 
            :field="item.ctaLink"
            class="border-b border-current pb-1 hover:text-magenta transition-colors font-bold"
          >
            {{ $prismic.asText(item.ctaText) }}
          </prismic-link>
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

  data() {
    return {
      background: {
        'magenta-light' : 'bg-magenta-light',
        'white' : 'bg-white'
      }
    }
  }
}
</script>
