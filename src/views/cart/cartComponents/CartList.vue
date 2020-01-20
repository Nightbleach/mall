<template>
  <v-container>
    <cart-list-item
      v-for="(item, index) in getCartList"
      :key="index"
      :product = item
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['getCartList'])
  }
}
</script>

<style scoped>

</style>
