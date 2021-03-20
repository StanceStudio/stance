<template>
  <div>
    <slice-zone type="page" uid="home" class="min-h-screen"/>
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
    FooterPrismic
  },

  head() {
    return {
      titleTemplate: 'Stance',
    };
  },

  async asyncData({ $prismic, params, error, app }) {
      try {
        const result = (await $prismic.api.getByUID('page', 'home')).data

        console.log('page',result);

        return {
            // Page content
            footer: {
              background_image: result.footer_background_image,
              heading: result.footer_heading,
              text: result.footer_text,
            }
        };
      } catch (e) {
        error({ statusCode: 404, message: "Page not found" });
      }
  },
};
</script>
