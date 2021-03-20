<template>
  <div class="font-body text-black antialiase">
    <!-- Vue tag to add header component -->
    <header-prismic/>
    <div class="w-3/5 lg:w-2/5 mx-auto text-center text-brown pt-24 lg:pt-48">
      <h1 class="font-serif mb-5 text-5xl lg:text-7xl">Page not found</h1>
      <p class="mb-3 lg:text-xl">Sorry we were unable to find the page you are looking for.</p>
    </div>
  </div>
</template>

<script>
import HeaderPrismic from '../components/HeaderPrismic.vue'

export default {
  name: 'NotFound',
  components: {
    HeaderPrismic
  },

   head() {
    return {
      title: "404 Page not found"
    };
  }
}
</script>