<template>
  <v-carousel
    height = 250
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item, index) in banner"
      :key="index"
      :src = item.image
      reverse-transition="'fade-transition"
    >

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
