<template>
  <section class="section lg:px-8 py-10 lg:py-20 px-8">
    <div class="rich-text rich-text--lg links lg:w-11/12 mx-auto flex">
      <prismic-rich-text :field="slice.primary.text" class="lg:w-7/12 lg:ml-auto" />
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
}
</script>
