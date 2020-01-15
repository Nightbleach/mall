<template>
  <div class="home">
    <Navbar/>
    <Carousel :banner="banner"/>
    <Recommend :recommend = 'recommend'/>
    <week-trend/>
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

// 引入网络请求
import { getHomeData, getProductData } from '../../request/home'

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
    Carousel,
    Recommend,
    WeekTrend
  },
  data () {
    return {
      banner: [],
      recommend: []
    }
  },
  created () {
    this.getHomeData()
    this.getProductData('pop')
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
      })
    }
  }
}
</script>
