<template>
  <div>
    <slice-zone
      :components="components"
      :slices="slices"
      class="min-h-screen"
    />
    <page-footer :data="footer" />
    <footer-prismic />
  </div>
</template>

<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
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
          hid: "og:image",
          property: "og:image",
          content: this.image,
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
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.image,
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
        slices: result.slices || result.body,
        title: result.meta_title || $prismic.asText(result.title),
        description: result.meta_description,
        image: result.meta_image.url,
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
