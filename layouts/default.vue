
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
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>