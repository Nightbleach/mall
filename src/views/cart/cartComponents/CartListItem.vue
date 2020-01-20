<template>
  <v-container>
    <v-card
      outlined
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="125"
          tile
        >
          <v-img :src="product.img"/>
        </v-avatar>
        <div>
          <v-card-title
            class="subtitle-1"
            v-text="product.title"
          />
          <v-card-subtitle v-text="product.desc"/>
          <v-card-subtitle class="py-0 red--text">${{product.oldPrice}}</v-card-subtitle>
          <v-card-subtitle>{{product.count}}</v-card-subtitle>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    product: {
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
