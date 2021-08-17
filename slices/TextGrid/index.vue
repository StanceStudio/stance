<template>
  <section
    class="text-grid section py-16 lg:py-40"
    :class="style[slice.primary.backgroundColor]"
  >
    <div class="lg:w-11/12 mx-auto px-8">
      <header
        v-if="$prismic.asText(slice.primary.heading) !== ''"
        class="flex justify-center mb-14 lg:mb-24 lg:mt-2"
      >
        <prismic-rich-text
          :field="slice.primary.heading"
          :class="
            slice.primary.headingStyle === 'small'
              ? 'text-grid__h--sm'
              : 'text-grid__h--lg'
          "
          class="
            text-center
            lg:w-2/3
          "
        />
      </header>
      <div class="lg:flex lg:flex-wrap -mx-8">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="grid-item lg:w-1/2 px-8"
          :class="[item.removeMargin !== 'yes' ? 'mb-14' : 'mb-6',  i === slice.items.length - 1 ? 'mb-0' : 'lg:mb-28']"
        >
          <prismic-rich-text
            :field="item.text"
            class="links lg:text-xl font-medium leading-relaxed"
          />
          <div
            class="mt-8 lg:text-xl"
            v-if="$prismic.asText(item.ctaText) !== ''"
          >
            <prismic-link
              :field="item.ctaLink"
              class="
                border-b border-current
                pb-1
                hover:text-magenta
                transition-colors
                font-bold
              "
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
        return {};
      },
    },
  },

  data() {
    return {
      style: {
        "magenta-light": "bg-magenta-light",
        white: "bg-white",
        green: "bg-green text-white",
      },
    };
  },
};
</script>
<style lang="postcss">
.grid-item {
  h3 {
    @apply font-serif text-3xl mb-8 leading-snug;
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
<style lang="postcss" scoped>
.text-grid__h--lg {
  @apply font-serif text-3xl lg:text-6xl lg:leading-tight;
}

.text-grid__h--sm {
  @apply uppercase lg:text-xl font-bold tracking-wide lg:mb-16;
}
</style>