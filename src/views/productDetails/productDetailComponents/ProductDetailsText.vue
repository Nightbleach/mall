<template>
  <v-container>
    <v-row>
      <v-col>
        <div>{{goods.title}}</div>
        <div class="red--text">{{goods.price}}
          <span class="productOldPrice ml-2">{{goods.oldPrice}}</span>
          <v-chip class="ml-3 white--text" x-small color="red">{{goods.discountDesc}}</v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetailsText',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.productOldPrice
  text-decoration line-through
  color darkgrey
</style>
