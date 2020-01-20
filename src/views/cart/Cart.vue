<template>
  <v-container>
    <cart-navbar/>
    <cart-list/>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../components/content/Footer'
import CartNavbar from './cartComponents/CartNavbar'
import CartList from './cartComponents/CartList'
export default {
  name: 'Cart',
  components: {
    Footer,
    CartNavbar,
    CartList
  }
}
</script>

<style scoped>

</style>
