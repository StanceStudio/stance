<template>
  <div class="post-item items-center lg:flex">
    <div class="lg:w-6/12">
      <nuxt-link :to="link">
        <!-- <prismic-image :field="post.data.featured_image" class="inline-block" /> -->
        <!-- <img
            v-if="post.data.featured_image.url"
            :data-src="post.data.featured_image.url"
            class="inline-block lazyload"
            :alt="post.data.featured_image.alt"
          /> -->
        <responsive-image :data="post.data.featured_image" />
      </nuxt-link>
    </div>
    <div class="ml-auto lg:w-5/12 lg:pl-24">
      <h2
        class="mt-8 mb-6 font-serif text-3xl lg:mt-0 lg:text-5xl lg:leading-tight"
      >
        {{ $prismic.asText(post.data.title) }}
      </h2>
      <prismic-rich-text
        v-if="$prismic.asText(post.data.excerpt)"
        :field="post.data.excerpt"
        class="font-medium lg:text-2xl lg:leading-tight"
      />
      <nuxt-link
        :to="link"
        class="mt-8 inline-block font-bold hover:text-magenta lg:text-xl"
      >
        <span class="link link--active">{{
          post.type === "case_study" ? "Read Case Study" : "Read Update"
        }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post"],
  data: function () {
    return {
      link: "",
    };
  },
  name: "post-widget",
  created() {
    //console.log(this.post);
    this.link = LinkResolver(this.post);
  },
};
</script>
