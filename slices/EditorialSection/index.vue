<template>
  <section
    class="section bg-cover bg-center bg-no-repeat py-20 lg:py-40"
    :style="sectionStyles"
  >
    <div class="mx-auto px-8 lg:w-10/12">
      <header
        class="mb-8 lg:mb-24 lg:mt-2 lg:px-24"
        v-if="
          $prismic.asText(slice.primary.heading) !== '' ||
          $prismic.asText(slice.primary.subheading) !== ''
        "
      >
        <prismic-rich-text
          :field="slice.primary.subheading"
          v-if="$prismic.asText(slice.primary.subheading) !== ''"
          class="mb-12 text-center font-bold uppercase tracking-wide lg:mb-32 lg:text-xl"
        />
        <prismic-rich-text
          :field="slice.primary.heading"
          v-if="$prismic.asText(slice.primary.heading) !== ''"
          class="text-center font-serif text-3xl lg:text-6xl lg:leading-tight"
        />
      </header>
      <div class="items-center lg:-mx-12 lg:flex">
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
          <!-- <img
            v-else-if="slice.primary.image.url"
            :data-src="slice.primary.image.url"
            class="lazyload"
            :alt="slice.primary.image.alt"
            :id="slice.primary.image.alt | kebabCase"
          /> -->
          <responsive-image
            :data="slice.primary.image"
            :id="slice.primary.image.alt | kebabCase"
          />
        </div>
        <div class="max-w-prose lg:w-1/2 lg:px-12">
          <prismic-rich-text
            v-if="$prismic.asText(slice.primary.leadText) !== ''"
            :field="slice.primary.leadText"
            class="mb-8 font-serif text-xl lg:text-3xl"
          />
          <prismic-rich-text
            :field="slice.primary.text"
            class="rich-text links py-3 font-medium lg:text-2xl"
          />
          <prismic-rich-text
            v-if="$prismic.asText(slice.primary.altText) !== ''"
            :field="slice.primary.altText"
            class="mb-8 font-serif text-xl lg:text-3xl"
          />
          <div
            class="my-4 lg:text-xl"
            v-if="$prismic.asText(slice.primary.ctaText) !== ''"
          >
            <prismic-link
              :field="slice.primary.ctaLink"
              class="font-bold hover:text-magenta"
            >
              <span class="link link--active">{{
                $prismic.asText(slice.primary.ctaText)
              }}</span>
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
