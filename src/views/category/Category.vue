<template>
  <v-container>
    <div>Category</div>
<!--    钩子函数模拟小球半场动画-->
<!--    <v-btn class="primary" @click="flag = !flag">添加购物车</v-btn>-->
<!--&lt;!&ndash;    使用vue动画 要使用 transition 元素&ndash;&gt;-->
<!--    <transition-->
<!--      @before-enter="beforeEnter"-->
<!--      @enter="enter"-->
<!--      @after-enter="afterEnter"-->
<!--    >-->
<!--      <div v-show="flag" class="ball"></div>-->
<!--    </transition>-->
<!--    <v-row>-->
<!--      <v-col cols="5">-->
<!--        <v-text-field-->
<!--          label="id"-->
<!--          outlined-->
<!--          v-model="id"-->
<!--        />-->
<!--        <v-text-field-->
<!--          label="Name"-->
<!--          outlined-->
<!--          v-model="name"-->
<!--        />-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-btn class="error" @click="add">添加人名</v-btn>-->
<!--      <v-card-->
<!--        class="mx-auto"-->
<!--        max-width="300"-->
<!--        tile-->
<!--      >-->
<!--&lt;!&ndash;        <transition-group>&ndash;&gt;-->
<!--          <v-list disabled  :key="id">-->
<!--            <v-subheader>REPORTS</v-subheader>-->
<!--            <v-list-item-group v-model="info" color="primary">-->
<!--              <transition-group><v-list-item-->
<!--                class="nList"-->
<!--                v-for="(item, i) in info"-->
<!--                :key="i"-->
<!--                @click="del(i)"-->
<!--              >-->
<!--                <v-list-item-content>-->
<!--                  {{item.id}}-->
<!--                  <v-list-item-title v-text="item.name"/>-->
<!--                </v-list-item-content>-->
<!--              </v-list-item></transition-group>-->
<!--            </v-list-item-group>-->
<!--          </v-list>-->
<!--&lt;!&ndash;        </transition-group>&ndash;&gt;-->
<!--        </v-card>-->
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../components/content/Footer'
export default {
  name: 'Category',
  components: {
    Footer
  },
  data () {
    return {
      flag: false,
      id: '',
      name: '',
      info: [
        { id: 1, name: 'BRYANT' },
        { id: 2, name: 't-mac' },
        { id: 3, name: 'bless you ' },
        { id: 4, name: 'GIGI' }

      ]
    }
  },
  methods: {
    add () {
      this.info.push({ id: this.id, name: this.name })
    },
    del (i) {
      console.log(123)
      this.info.splice(i, 1)
    },
    // 注意： 动画钩子函数的第一个参数 el ， 表示 要执行动画那个DOM元素，是个原生的 JS DOM对象
    beforeEnter (el) {
      // beforeEnter 表示动画入场之前，此时 动画尚未开始， 可以 在beforeEnter中，设置元素开始动画之前的样式
      // 设置小球开始动画之前， 起始的位置
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // el.offsetWidth
      // enter 表示动画 开始之后的样式，这里， 可以设置小球完成动画之后， 结束状态
      el.style.transform = 'translate(150px , 300px)'
      el.style.transition = 'all 1s ease'
      done()
    },
    afterEnter (el) {
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped lang="stylus">
.ball
  width 15px
  height 15px
  border-radius 50%
  background-color #ff8198
.nList :hover
  background-color lightcoral
.v-enter, v-leave-to
  opacity 0
  transform translateY(80px)
.v-enter-active, v-leave-active
  transition all 0.4s ease
</style>
