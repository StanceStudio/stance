<template>
  <section
    class="text-grid section py-16 lg:py-40"
    :class="[
      style[slice.primary.backgroundColor],
      { 'section--bg': slice.primary.backgroundColor },
    ]"
  >
    <div class="mx-auto px-8 lg:w-11/12">
      <header
        v-if="$prismic.asText(slice.primary.heading) !== ''"
        class="mb-14 flex justify-center lg:mb-24 lg:pt-2"
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
      <div class="-mx-8 lg:flex lg:flex-wrap">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="grid-item px-8 lg:mb-28 lg:w-1/2"
          :class="{ 'grid-item--remove-margin': item.removeMargin === 'yes' }"
        >
          <prismic-rich-text
            :field="item.text"
            class="links rich-text font-medium leading-relaxed lg:text-xl"
          />
          <div
            class="mt-8 lg:text-xl"
            v-if="$prismic.asText(item.ctaText) !== ''"
          >
            <prismic-link
              :field="item.ctaLink"
              class="font-bold hover:text-magenta"
            >
              <span class="link link--active">
                {{ $prismic.asText(item.ctaText) }}
              </span>
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
    @apply mb-8 font-serif text-3xl leading-snug;
  }

  h4 {
    @apply text-lg font-bold uppercase tracking-wide;
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

.section--bg + .section--bg {
  @apply pt-0;
}

.text-grid__h--lg {
  @apply font-serif text-3xl lg:text-6xl lg:leading-tight;
}

.text-grid__h--sm {
  @apply font-bold uppercase tracking-wide lg:mb-16 lg:text-xl;
}
</style>
