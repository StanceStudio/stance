<template>
  <img
    v-if="data.url"
    :data-src="imgSrc"
    :sizes="srcset.sizes"
    data-sizes="auto"
    :data-srcset="srcset.srcset"
    :alt="data.alt"
    class="lazyload"
  />
</template>
<script>
export default {
  props: {
    sizes: {
      type: String,
      default: "md:380px lg:512px xl:1350px, xxl:120vw",
    },
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },

  computed: {
    imgSrc() {
      if (!this.data.url) {
        return "";
      }

      return this.$img(this.data.url, {
        fit: "clip",
        auto: "format",
        q: 100,
      });
    },

    srcset() {
      if (!this.data.url) {
        return "";
      }

      return this.$img.getSizes(this.data.url, {
        sizes: this.sizes,
        modifiers: {
          fit: "clip",
          auto: "format",
          q: 100,
        },
      });
    },
  },
};
</script>