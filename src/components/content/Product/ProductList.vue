<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col
        cols="5"
        v-for="(item, index) in productData"
        :key = index
      >
        <product-list-item :goods="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductListItem from './ProductListItem'
export default {
  name: 'ProductList',
  props: {
    productData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ProductListItem
  }
}
</script>

<style scoped>

</style>
