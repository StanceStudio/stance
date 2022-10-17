
<template>
  <div class="font-body text-black antialiased">
    <header-prismic />
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Stance",
      titleTemplate: '%s  —  Stance',
      link: [
        {
          rel: 'canonical',
          href: `https://stance.agency${this.$route.path}`
        }
      ],
      meta: [
        {
          hid:"og:url",
          property: "og:url",
          content: `https://stance.agency${this.$route.path}`
        },
        {
          hid:"twitter:url",
          property: "twitter:url",
          content: `https://stance.agency${this.$route.path}`
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