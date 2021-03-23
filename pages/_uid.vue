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
      title: this.title,
      description: this.description,
      meta: [
        { hid: "og:title", property: "og:title", content: this.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.title,
        },
        {
          hid: "description",
          property: "description",
          content: this.description,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.description,
        },
      ],
    };
  },

  async asyncData({ $prismic, params, error }) {
    try {
      const result = (await $prismic.api.getByUID("page", params.uid)).data;

      //console.log(result);

      return {
        // Page content
        title: result.meta_title || $prismic.asText(result.title),
        footer: {
          background_image: result.footer_background_image,
          heading: result.footer_heading,
          text: result.footer_text,
        },
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
