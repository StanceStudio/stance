<template>
  <section class="section py-16 lg:py-20" :class="background[slice.primary.backgroundColor]">
    <div class="lg:w-11/12 mx-auto px-8">
      <header v-if="$prismic.asText(slice.primary.heading) !== ''" class="flex justify-center mb-14 lg:mb-24 lg:mt-2">
        <h2 class="font-serif text-center text-3xl lg:text-6xl lg:leading-tight lg:w-2/3">{{ $prismic.asText(slice.primary.heading) }}</h2>
      </header>
      <div class="lg:flex lg:flex-wrap -mx-8">
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="grid-item lg:w-1/2 px-8 lg:mb-28" :class="item.removeMargin !== 'yes' ? 'mb-14' : 'mb-6'">    
            <prismic-rich-text :field="item.text" class="links text-sm lg:text-xl font-medium leading-relaxed" />
            <div class="mt-6 text-md lg:text-xl" v-if="$prismic.asText(item.ctaText) !== ''">
              <prismic-link 
                :field="item.ctaLink"
                class="border-b border-current pb-1 hover:text-magenta transition-colors font-bold"
              >
                {{ $prismic.asText(item.ctaText) }}
              </prismic-link>
            </div>
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
<style>
.grid-item {
  h3 {
    @apply font-serif text-3xl mb-8;
  }

  h4 {
    @apply uppercase text-lg font-bold tracking-wide;
  }
}

@screen lg {
  .grid-item h3 {
    @apply text-6xl;
  }
}
</style>