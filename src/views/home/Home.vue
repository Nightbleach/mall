<template>
  <div class="home">
    <Navbar/>
    <Carousel :banner="banner"/>
    <Recommend :recommend = 'recommend'/>
    <week-trend/>
    <Tagbar @tagClick = 'tagPoint'/>
<!--    <scroll-loader :loader-method="getProductData" :loader-disable="disable">-->
    <product-list :productData="productData[currentType].list"/>
<!--    </scroll-loader>-->
    <load-more @loadMore = 'loadMore'/>
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
import LoadMore from '../../components/share/LoadMore'

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
    ProductList,
    LoadMore
  },
  data () {
    return {
      banner: [],
      recommend: [],
      productData: {
        'pop': { page: 0, list: [], pageSize: 20 },
        'new': { page: 0, list: [], pageSize: 20 },
        'sell': { page: 0, list: [], pageSize: 20 }
      },
      currentType: 'pop',
      disable: false
    }
  },
  created () {
    this.getHomeData()
    this.getProductData('pop')
    this.getProductData('new')
    this.getProductData('sell')
  },
  methods: {
    tagPoint (index) {
      if (index === 0) {
        this.currentType = 'pop'
      } else if (index === 1) {
        this.currentType = 'new'
      } else {
        this.currentType = 'sell'
      }
      console.log(index)
    },
    loadMore () {
      this.getProductData(this.currentType)
    },
    getHomeData () {
      getHomeData().then(res => {
        // console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getProductData (type) {
      const page = this.productData[type].page + 1
      getProductData(type, page).then(res => {
        console.log(res)
        // this.productData[type].page += 1
        const data = res.data
        this.productData[type].list.push(...data.list)
        // this.disable = data.length < this.pageSize
        // this.productData.page += 1
        this.productData[type].page += 1
      })
    }
  }
}
</script>
