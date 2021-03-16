<template>
  <section class="section lg:px-8 py-16 lg:py-22">
    <div class="rich-text lg:w-11/12 mx-auto py-24 bg-cover bg-center bg-no-repeat flex">
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

<style>
.rich-text ul,
.rich-text ol,
.rich-text p {
  @apply text-2xl mb-8;
}

@screen lg {
  .rich-text ul,
  .rich-text ol,
  .rich-text p {
    @apply text-xl leading-relaxed;
  }
}

.rich-text h1,
.rich-text h2,
.rich-text h3 {
  @apply font-serif text-3xl mb-8;
}

@screen lg {
  .rich-text h1,
  .rich-text h2,
  .rich-text h3 {
    @apply text-5xl;
  }
}

.rich-text h4 {
  @apply uppercase text-lg font-bold tracking-wide;
}

.rich-text a {
  @apply border-b border-current hover:text-magenta transition-colors;
}

.rich-text ul {
    @apply list-disc;
}

.rich-text ol {
    @apply list-decimal;
}

.rich-text ol,
.rich-text ul {
    @apply list-inside;
}
</style>
