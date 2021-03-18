<template>
  <section
    class="section hero bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
    :style="{backgroundImage: `url(${slice.primary.backgroundImage.url})`}"
  >
    <prismic-rich-text
      :field="slice.primary.heading"
      class="hero__heading transform opacity-0 translate-y-3 px-8 lg:w-2/3 mx-auto text-center text-4xl lg:text-7xl font-serif leading-tight lg:leading-tight"
      :class="{'transform-none opacity-100': loaded}"
    />

    <div
      class="hero__cta opacity-0 absolute bottom-0 left-0 w-full text-center my-12 lg:text-2xl font-medium"
      :class="{'opacity-100': loaded}"
      >
      <prismic-link
        :field="slice.primary.buttonLink"
        class="border-b border-current hover:text-magenta transition-colors"
      >
        {{ $prismic.asText(slice.primary.buttonText) }}
      </prismic-link>
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
      loaded: false
    }
  },

  mounted() {
    this.linkEvents();
    
    setTimeout(() => {
        this.loaded = true
    }, 250);
  },

  methods: {
    linkEvents() {
      window.addEventListener("scroll", () => {
        const target = document.querySelector(".hero__cta");
        if (target) {
          let height = window.innerHeight
          const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
          height = height / 2
          target.style.opacity = (height - scrollTop) / height
        }
      })
    },
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
}

.hero__heading,
.hero__cta {
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 650ms
}
</style>