<template>
  <section
    class="section px-8 pt-20 pb-8 text-center lg:pt-40"
    :class="background[slice.primary.backgroundColor]"
  >
    <header>
      <prismic-rich-text
        :field="slice.primary.subheading"
        class="mb-12 font-bold uppercase tracking-wide lg:text-xl"
      />
    </header>
    <div class="mx-auto flex flex-wrap lg:w-11/12">
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="mb-12 px-2 text-center lg:w-1/2"
      >
        <prismic-link :field="item.ctaLink">
          <!-- <prismic-image :field="item.image" class="inline-block" /> -->
          <!-- <img
            v-if="item.image.url"
            :data-src="item.image.url"
            class="inline-block lazyload"
            :alt="item.image.alt"
          /> -->
          <responsive-image :data="item.image" />
        </prismic-link>
        <prismic-rich-text
          :field="item.heading"
          class="mx-auto mb-8 mt-8 font-serif text-2xl leading-snug lg:mt-12 lg:text-4xl xl:w-4/5"
        />
        <div
          class="my-4 lg:text-xl"
          v-if="$prismic.asText(item.ctaText) !== ''"
        >
          <!-- <prismic-link
            :field="item.ctaLink"
            class="border-b border-current pb-1 hover:text-magenta transition-colors font-bold duration-300"
          > -->
          <prismic-link
            :field="item.ctaLink"
            class="font-bold hover:text-magenta"
          >
            <span class="link link--active">{{ $prismic.asText(item.ctaText) }}</span>
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
        return {};
      },
    },
  },

  data() {
    return {
      background: {
        "magenta-light": "bg-magenta-light",
        white: "bg-white",
      },
    };
  },
};
</script>
