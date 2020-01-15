<template>
  <v-container fluid class="blue-grey lighten-4">
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in tagbarContent"
        :key="index"
        class="text-center"
        @click="tagClick(index)"
      >
        <span :class="{active: currentIndex === index}" class="TagText">{{item}}</span>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Tagbar',
  data () {
    return {
      tagbarContent: ['流行', '新款', '精选'],
      currentIndex: 0
    }
  },
  methods: {
    tagClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="stylus">
.active
  color palevioletred
  border-bottom 1px solid palevioletred
</style>
