<template>
  <section class="section lg:px-8 py-16 lg:py-20 px-8">
    <div class="lg:w-11/12 mx-auto flex flex-col lg:flex-row">
      <prismic-rich-text :field="slice.primary.aside" class="rich-text links order-1 lg:order-first" />
      <prismic-rich-text :field="slice.primary.text" class="rich-text rich-text--lg links lg:w-7/12 lg:ml-auto" />
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
