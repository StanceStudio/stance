<template>
  <section
    class="section hero bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
    :style="{ backgroundImage: `url(${slice.primary.backgroundImage.url})` }"
  >
    <!-- Heading -->
    <prismic-rich-text
      :field="slice.primary.heading"
      class="hero__heading transform opacity-0 translate-y-3 px-8 lg:w-2/3 mx-auto text-center text-4xl md:text-6xl lg:text-7xl font-serif leading-tight lg:leading-tight z-10"
      :class="{ 'transform-none opacity-100': loaded }"
    />
    <!-- Heading -->

    <!-- CTA -->
    <div
      class="hero__cta opacity-0 absolute bottom-0 left-0 w-full text-center my-12 lg:text-2xl font-medium z-10"
      :class="{ 'opacity-100': loaded }"
    >
      <a
        v-if="
          slice.primary.buttonLink.url &&
          slice.primary.buttonLink.url.indexOf('#') !== -1
        "
        href="#"
        role="button"
        class="border-b border-current hover:text-magenta transition-colors"
        @click.prevent="scrollToHash(slice.primary.buttonLink.url)"
      >
        {{ $prismic.asText(slice.primary.buttonText) }}
      </a>
      <prismic-link
        v-else
        :field="slice.primary.buttonLink"
        class="border-b border-current hover:text-magenta transition-colors"
      >
        {{ $prismic.asText(slice.primary.buttonText) }}
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
        class="h-full absolute inset-0"
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
        const target = document.querySelector(".hero__cta");
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

.hero__heading,
.hero__cta {
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 650ms;
}
</style>
