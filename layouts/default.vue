
<template>
  <div class="font-body text-black antialiased">
    <header-prismic />
    <nuxt />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";

export default {
  components: {
    HeaderPrismic,
  },
  head() {
    return {
      title: "Stance",
      titleTemplate: '%s  —  Stance',
      link: [
        {
          rel: 'canonical',
          href: `https://stance.design${this.$route.path}`
        }
      ],
      meta: [
        {
          hid:"og:url",
          property: "og:url",
          content: `https://stance.design${this.$route.path}`
        },
        {
          hid:"twitter:url",
          property: "twitter:url",
          content: `https://stance.design${this.$route.path}`
        }
      ]
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>