<template>
  <div>
    <slice-zone type="update" :uid="$route.params.uid" class="min-h-screen" />
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
      title: this.title,
      meta: [{ hid: "og:title", property: "og:title", content: this.title }],
    };
  },

  async asyncData({ $prismic, params, error }) {
      try {
        const result = (await $prismic.api.getByUID('update', params.uid)).data

        return {
            // Page content
            title: $prismic.asText(result.title),
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
