<template>
  <div>
    <v-carousel
      cycle
      height = 350
      hide-delimiter-background>
      <v-carousel-item
        reverse-transition="'fade-transition"
        v-for="(item, index) in topImg"
        :key="index"
      >
        <v-img sizes="500" eager max-width="900" max-height="400" :src="item"/>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    topImg: {
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
