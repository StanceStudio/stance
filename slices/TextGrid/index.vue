<template>
  <section
    class="text-grid section py-16 lg:py-40"
    :class="[style[slice.primary.backgroundColor], {'section--bg': slice.primary.backgroundColor}]"
  >
    <div class="lg:w-11/12 mx-auto px-8">
      <header
        v-if="$prismic.asText(slice.primary.heading) !== ''"
        class="flex justify-center mb-14 lg:mb-24 lg:pt-2"
      >
        <prismic-rich-text
          :field="slice.primary.heading"
          :class="
            slice.primary.headingStyle === 'small'
              ? 'text-grid__h--sm'
              : 'text-grid__h--lg'
          "
          class="text-center lg:w-2/3"
        />
      </header>
      <div class="lg:flex lg:flex-wrap -mx-8">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="grid-item px-8 lg:w-1/2 lg:mb-28"
          :class="{'grid-item--remove-margin': item.removeMargin === 'yes'}"
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

.grid-item h3 {
  @screen lg {
    @apply text-6xl;
  }
}
</style>
<style lang="postcss" scoped>
.grid-item:not(:last-child) {
  @apply mb-12 xl:mb-24;
}

.grid-item:nth-last-of-type(-n + 2) {
  @screen lg {
    @apply mb-0;
  }
}

.grid-item--remove-margin {
  @screen lg {
    @apply mb-6;
  }
}

.section--bg+.section--bg {
  @apply pt-0;
}

.text-grid__h--lg {
  @apply font-serif text-3xl lg:text-6xl lg:leading-tight;
}

.text-grid__h--sm {
  @apply uppercase lg:text-xl font-bold tracking-wide lg:mb-16;
}
</style>