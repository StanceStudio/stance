<template>
    <div class="post-item lg:flex items-center">
        <div class="lg:w-6/12">
            <nuxt-link :to="link">
                <prismic-image :field="post.data.featured_image" class="inline-block"/>
            </nuxt-link>
        </div>
        <div class="lg:w-5/12 lg:pl-24 ml-auto">
            <h2 class="text-3xl lg:text-5xl font-serif mt-8 lg:mt-0 mb-6 lg:leading-tight">{{ $prismic.asText(post.data.title) }}</h2>
            <prismic-rich-text
                v-if="$prismic.asText(post.data.excerpt)"
                :field="post.data.excerpt"
                class="text-sm lg:text-xl lg:leading-tight"
            />
            <nuxt-link :to="link" class="border-b border-current pb-1 hover:text-magenta transition-colors font-bold mt-8 inline-block">
                <span v-if="post.type === 'case_study'">
                    Read Case Study
                </span>
                <span v-else>
                    Read Update
                </span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['post'],
  data: function() {
    return {
      link: '',
    }
  },
  name: 'post-widget',
  created () {
      console.log(this.post);
    this.link = LinkResolver(this.post)
  },
}
</script>