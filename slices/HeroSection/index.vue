<template>
  <section
    class="section hero relative flex flex-col justify-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${slice.primary.backgroundImage.url})` }"
  >
    <!-- Heading -->
    <div
      class="z-10 mx-auto px-8 lg:w-2/3"
      :class="[
        'left' === slice.primary.textAlign ? 'text-left' : 'text-center',
      ]"
    >
      <prismic-rich-text
        :field="slice.primary.heading"
        class="hero__heading translate-y-3 transform font-serif text-4xl leading-tight opacity-0 transition-all duration-700 md:text-6xl lg:text-7xl lg:leading-tight"
        :class="{ 'translate-y-0 opacity-100': loaded }"
      />
      <prismic-rich-text
        v-if="$prismic.asText(slice.primary.subHeading) !== ''"
        class="hero__subheading mt-14 translate-y-3 transform text-lg font-medium opacity-0 transition-all delay-200 duration-700 lg:text-xl"
        :field="slice.primary.subHeading"
        :class="{ 'translate-y-0 opacity-100': loaded }"
      />
    </div>
    <!-- Heading -->

    <!-- CTA -->
    <div
      class="hero__cta absolute bottom-0 left-0 z-10 my-12 w-full text-center font-medium opacity-0 transition-all delay-500 duration-700 lg:text-2xl"
      :class="[
        { 'opacity-100': loaded },
        $prismic.asText(slice.primary.subHeading) !== ''
          ? 'delay-300'
          : 'delay-500',
      ]"
    >
      <a
        v-if="
          slice.primary.buttonLink.url &&
          slice.primary.buttonLink.url.indexOf('#') !== -1
        "
        href="#"
        role="button"
        class="hero__cta-link hover:text-magenta"
        @click.prevent="scrollToHash(slice.primary.buttonLink.url)"
      >
        <span class="link link--active">
          {{ $prismic.asText(slice.primary.buttonText) }}
        </span>
      </a>
      <prismic-link
        v-else
        :field="slice.primary.buttonLink"
        class="hero__cta-link hover:text-magenta"
      >
        <span class="link link--active">{{
          $prismic.asText(slice.primary.buttonText)
        }}</span>
      </prismic-link>
    </div>
    <!-- CTA -->

    <!-- Background video -->
    <client-only>
      <video-background
        v-if="
          slice.primary.media === 'video' && slice.primary.backgroundVideo.url
        "
        :src="slice.primary.backgroundVideo.url"
        :sources="[
          {
            src: slice.primary.backgroundVideo.url,
            res: 991,
            autoplay: true,
          },
        ]"
        class="absolute inset-0 h-full"
      >
      </video-background>
    </client-only>
    <!-- Background video -->
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
      loaded: false,
    };
  },

  mounted() {
    this.linkEvents();

    setTimeout(() => {
      this.loaded = true;
    }, 200);
  },

  methods: {
    scrollToHash(url) {
      const hash = url.split("#")[1];
      if (hash) {
        document.querySelector(`#${hash}`).scrollIntoView({
          behavior: "smooth",
        });
      }
    },

    linkEvents() {
      window.addEventListener("scroll", () => {
        const target = this.$el.querySelector(".hero__cta-link");
        if (target) {
          let height = window.innerHeight;
          const scrollTop =
            window.pageYOffset !== undefined
              ? window.pageYOffset
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollTop;
          height = height / 1;
          target.style.opacity = (height - scrollTop) / height;
        }
      });
    },
  },
};
</script>

<style scoped>
.vue-responsive-videobg {
  position: absolute !important;
}

.hero {
  min-height: 100vh;
}

/* .hero__heading,
.hero__subheading,
.hero__cta {
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 650ms;
} */
</style>
