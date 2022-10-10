<template>
  <section
    :id="_uid"
    class="section section-logos py-16 lg:py-40 px-8 bg-magenta-light"
  >
    <div class="lg:flex lg:space-x-10 lg:w-11/12 mx-auto">
      <header
        v-if="$prismic.asText(slice.primary.heading) !== ''"
        class="flex flex-col mb-14 lg:mb-24 lg:mt-2 lg:w-1/2"
      >
        <prismic-rich-text
          :field="slice.primary.heading"
          class="font-serif text-3xl lg:text-6xl lg:leading-tight"
        />
        <prismic-rich-text
          v-if="$prismic.asText(slice.primary.subheading) !== ''"
          :field="slice.primary.subheading"
          class="mt-6 text-lg"
        />
      </header>
      <div
        class="flex flex-wrap items-center justify-between lg:w-1/2 lg:px-12 xl:px-24"
      >
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="w-1/2 md:w-3/12 lg:w-1/2 px-1 lg:px-8 py-6 text-center"
        >
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
        return {};
      },
    },
  },
};
</script>
