<template>
  <div>
    <div class="min-h-screen">
      <!-- <slice-zone type="page" uid="case-studies" /> -->
      <slice-zone :components="components" :slices="slices" />
    </div>
    <!-- Check blog posts exist -->
    <div v-if="posts.length !== 0">
      <!-- Template for blog posts -->
      <section
        v-for="post in posts"
        :key="post.id"
        class="pb-20 lg:pb-24 lg:w-11/12 mx-auto px-8"
      >
        <post-widget :post="post"></post-widget>
      </section>
    </div>
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

  async asyncData({ $prismic, params, error, app }) {
    try {
      const page = (await $prismic.api.getByUID("page", "case-studies")).data;

      // Query to get posts content to preview
      const posts = await $prismic.api.query(
        [
          $prismic.predicates.at("document.type", "case_study"),
          $prismic.predicates.not("my.case_study.hide_from_archive", true),
        ],
        { orderings: "[my.case_study.order_date desc]" }
      );

      //console.log(posts);

      return {
        slices: page.slices || page.body,
        title: page.meta_title || $prismic.asText(page.title),
        description: page.meta_description,
        image: page.meta_image.url,
        // posts
        posts: posts.results,
        // Page content
        footer: {
          background_image: page.footer_background_image,
          heading: page.footer_heading,
          text: page.footer_text,
        },
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
