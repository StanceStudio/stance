<template>
  <div class="content-ratio" :style="style" v-if="data.url">
    <image-component :data="data" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },

  computed: {
    style() {
      const padding =
        (this.data.dimensions.height / this.data.dimensions.width) * 100;
      return `padding-bottom: ${padding}%`;
    },
  },
};
</script>