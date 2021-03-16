<template>
  <div>
    <div class="min-h-screen">
      <slice-zone type="page" uid="updates"/>
      <!-- Check blog posts exist -->
      <div v-if="posts.length !== 0">
        <!-- Template for blog posts -->
        <section v-for="post in posts" :key="post.id" class="pb-20 lg:pb-24 lg:w-11/12 mx-auto px-8">
          <post-widget :post="post"></post-widget>
        </section>
      </div>
      <page-footer :data="footer" />
    </div>
    <footer-prismic />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import PostWidget from '~/components/PostWidget.vue'
import PageFooter from "~/components/PageFooter.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    SliceZone,
    PostWidget,
    PageFooter,
    FooterPrismic
  },

  async asyncData({ $prismic, params, error, app }) {
      try {
        const page = (await $prismic.api.getByUID('page', 'updates')).data

        // Query to get posts content to preview
        const posts = await $prismic.api.query(
          $prismic.predicates.at("document.type", "update"),
          { orderings : '[my.post.date desc]' }
        )

        //console.log(posts);

        return {
            // posts
            posts: posts.results,
            // Page content
            footer: {
              background_image: page.footer_background_image,
              heading: page.footer_heading,
              text: page.footer_text,
            }
        };
      } catch (e) {
        error({ statusCode: 404, message: "Page not found" });
      }
  },
};
</script>
