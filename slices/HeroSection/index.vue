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
      class="hero__link opacity-0 absolute bottom-0 left-0 w-full text-center my-12 text-2xl font-medium hidden lg:block"
      :class="{'opacity-100': loaded}"
      >
      <prismic-link :field="slice.primary.buttonLink" class="border-b border-current hover:text-magenta transition-colors">
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
    setTimeout(() => {
        this.loaded = true
    }, 250);
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
}

.hero__heading,
.hero__link {
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 650ms
}

.hero__link {
  /* transition-delay: 500ms; */
  transition-duration: 1000ms;
}
</style>