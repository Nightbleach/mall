<template>
  <v-container fluid class="pink lighten-4">
    <v-row no-gutters>
      <v-col>
        <div class="white--text text-center">购物街 ({{getCartListLength}})</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'getCartListLength'
    ])
  }
}
</script>

<style scoped>

</style>
