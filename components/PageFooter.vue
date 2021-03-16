<template>
    <section
      v-if="$prismic.asText(data.heading)"
      class="section py-44 lg:py-60 bg-cover bg-center bg-no-repeat flex flex-column items-center justify-center"
      :style="sectionStyles"
      >
        <div>
          <h2 class="font-serif text-center text-4xl lg:text-6xl mb-4 lg:mb-8">{{ $prismic.asText(data.heading) }}</h2>
            <prismic-rich-text
                :field="data.text"
                class="links lg:text-3xl py-3 w-2/3 lg:w-full mx-auto text-center font-medium"
            />
        </div>
        
    </section>
</template>

<script>
export default {
  name: 'page-footer',

  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    sectionStyles() {
      if (!this.data.background_image || !this.data.background_image.mobile)
        return

      const backgroundImage = (this.$screen.lg) ? this.data.background_image.url : this.data.background_image.mobile.url

      return {
        backgroundImage: `url(${backgroundImage})`
      }
    }
  }
}
</script>