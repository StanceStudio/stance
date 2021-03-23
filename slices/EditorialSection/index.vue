<template>
  <section
    class="section py-20 lg:py-40 bg-cover bg-center bg-no-repeat"
    :style="sectionStyles"
  >
    <div class="lg:w-10/12 mx-auto px-8">
      <header
        class="mb-8 lg:px-24 lg:mb-24 lg:mt-2"
        v-if="$prismic.asText(slice.primary.heading) !== ''"
      >
        <prismic-rich-text
          :field="slice.primary.heading"
          class="font-serif text-center text-3xl lg:text-6xl lg:leading-tight"
        />
      </header>
      <div class="lg:flex items-center lg:-mx-12">
        <div
          class="lg:w-1/2 lg:px-12"
          :class="
            !slice.primary.image.url || !slice.primary.video.url
              ? 'pb-0'
              : 'pb-10'
          "
        >
          <!-- <prismic-image v-if="slice.primary.image.url" :field="slice.primary.image"/> -->
          <video
            v-if="slice.primary.media === 'video' && slice.primary.video.url"
            :src="slice.primary.video.url"
            :data-poster="slice.primary.image.url"
            preload="none"
            class="lazyload"
            muted
            data-autoplay=""
            playsinline
            loop
          ></video>
          <img
            v-else-if="slice.primary.image.url"
            :data-src="slice.primary.image.url"
            class="lazyload"
            :alt="slice.primary.image.alt"
            :id="slice.primary.image.alt | kebabCase"
          />
        </div>
        <div class="lg:w-1/2 lg:px-12 max-w-prose">
          <prismic-rich-text
            v-if="$prismic.asText(slice.primary.leadText) !== ''"
            :field="slice.primary.leadText"
            class="text-xl lg:text-3xl font-serif mb-8"
          />
          <prismic-rich-text
            :field="slice.primary.text"
            class="rich-text links lg:text-2xl py-3 font-medium"
          />
          <prismic-rich-text
            v-if="$prismic.asText(slice.primary.altText) !== ''"
            :field="slice.primary.altText"
            class="text-xl lg:text-3xl font-serif mb-8"
          />
          <div
            class="my-4 lg:text-xl"
            v-if="$prismic.asText(slice.primary.ctaText) !== ''"
          >
            <prismic-link
              :field="slice.primary.ctaLink"
              class="border-b border-current pb-1 hover:text-magenta transition-colors font-bold"
            >
              {{ $prismic.asText(slice.primary.ctaText) }}
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

  filters: {
    kebabCase: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.replace(/\W+/g, "-").toLowerCase();
    },
  },

  computed: {
    sectionStyles() {
      if (!this.slice.primary.backgroundImage.url) {
        return;
      }

      return {
        backgroundImage: `url(${this.slice.primary.backgroundImage.url})`,
      };
    },
  },
};
</script>
<style scoped>
video {
   object-fit: inherit;
}
</style>