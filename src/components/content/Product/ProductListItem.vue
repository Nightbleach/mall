<template>
<div>
  <v-card
    flat
  >
    <v-img
      :src="goods.show.img"
    />
    <v-card-subtitle class="pa-1">
      {{goods.title}}
      <div class="text-center">
        <span class="px-4 red--text text--accent-2">${{goods.price}}</span>
        <span class="px-4">
          <v-icon x-small color="red">fal fa-star</v-icon>
          {{goods.cfav}}
        </span>
      </div>
    </v-card-subtitle>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'ProductListItem',
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

<style scoped>

</style>
