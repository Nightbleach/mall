<template>
  <div class="home">
    <Navbar/>
    <Carousel :banner="banner"/>
    <Recommend :recommend = 'recommend'/>
    <week-trend/>
    <Tagbar/>
    <product-list :productData="productData[currentType].list"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// 引入components中的组件
import Navbar from '../../components/share/Navbar'
import Footer from '../../components/content/Footer'
import Carousel from './homeComponents/Carousel'
import Recommend from './homeComponents/Recommend'
import WeekTrend from './homeComponents/WeekTrend'
import Tagbar from '../../components/content/Tagbar'
import ProductList from '../../components/content/Product/ProductList'

// 引入网络请求
import { getHomeData, getProductData } from '../../request/home'

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
    Carousel,
    Recommend,
    WeekTrend,
    Tagbar,
    ProductList
  },
  data () {
    return {
      banner: [],
      recommend: [],
      productData: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  created () {
    this.getHomeData()
    this.getProductData('pop')
    // this.getProductData('new')
    // this.getProductData('sell')
  },
  methods: {
    getHomeData () {
      getHomeData().then(res => {
        // console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getProductData (type) {
      getProductData(type, 1).then(res => {
        console.log(res)
        const data = res.data
        this.productData['pop'].list.push(...data.list)
      })
    }
  }
}
</script>
