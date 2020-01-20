<template>
 <v-container fluid>
   <product-detail-navbar/>
   <product-detail-carousel :topImg = 'topImg'/>
   <div>{{this.$store.state.cartList.length}}</div>
   <product-details-text :goods = 'productDetails'/>
   <pr-params :goodsParams = 'goodsParams'/>
   <product-footer @addCart="addCart" />
 </v-container>
</template>

<script>
import ProductDetailNavbar from '../../components/share/ProductDetailNavbar'
import ProductDetailCarousel from './productDetailComponents/ProductDetailCarousel'
import ProductDetailsText from './productDetailComponents/ProductDetailsText'
import ProductFooter from './productDetailComponents/ProductFooter'
import PrParams from './productDetailComponents/PrParams'
import { getProductDetails, GoodDetails, ProductParams } from '../../request/product'

export default {
  name: 'ProductDetails',
  components: {
    ProductDetailNavbar,
    ProductDetailCarousel,
    ProductDetailsText,
    ProductFooter,
    PrParams
  },
  data () {
    return {
      iid: null,
      topImg: [],
      productDetails: {},
      goodsParams: {}
    }
  },
  created () {
    this.iid = this.$route.params.iid
    this.getProductDetails()
  },
  methods: {
    getProductDetails () {
      getProductDetails(this.iid).then(res => {
        console.log(res)
        const data = res.result
        this.topImg = data.itemInfo.topImages
        this.productDetails = new GoodDetails(data.itemInfo, data.column, data.shopInfo.services)
        this.goodsParams = new ProductParams(data.itemParams)
      })
    },
    addCart () {
      const product = {}
      product.img = this.topImg[0]
      product.title = this.productDetails.title
      product.oldPrice = this.productDetails.oldPrice
      product.iid = this.iid
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>

</style>
