<template>
  <v-container class="grey lighten-3 pl-1" fluid>
    <v-row
      no-gutters
     justify="start"
    >
      <v-col
        cols="1"
        class="mr-9"
      >
        <v-icon @click="backHome">fal fa-arrow-alt-left</v-icon>
      </v-col>
      <v-col
        class="detailItemBarContent"
        cols="2"
        v-for="(item,index) in title"
        :key="item.id"
      >
        <div
          class="ml-5 text-center"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'DetailNavbar',
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backHome () {
      this.$router.back()
    },
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="stylus">
  .active
    color #ff8198
</style>
