<template>
  <div>
    <slice-zone type="page" :uid="$route.params.uid" class="min-h-screen" />
    <page-footer :data="footer" />
    <footer-prismic />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import PageFooter from "~/components/PageFooter.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    SliceZone,
    PageFooter,
    FooterPrismic,
  },

  head() {
    return {
      title: this.$prismic.asText(this.title),
    };
  },

  async asyncData({ $prismic, params, error }) {
    try {
      const result = (await $prismic.api.getByUID("page", params.uid));

      console.log(result);

      return {
        // Page content
        title: result.data.title,
        footer: {
          background_image: result.data.footer_background_image,
          heading: result.data.footer_heading,
          text: result.data.footer_text,
        },
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
