<template>
  <v-container>
    <div>Profile</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="id"
              outlined
              v-model="id"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Brand"
              outlined
              v-model="brand"
              @keyup.enter="addProduct"
            />
          </v-col>
          <v-col cols="4"  class="pt-5">
            <v-btn @click="addProduct" class="blue-grey darken-4 white--text text-capitalize" >Add Product</v-btn>
          </v-col>
          <v-col>
            <v-text-field label="Search" v-model='keywords'/>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Brand</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in search(keywords)" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.Brand }}</td>
          <td><v-btn @click="remove(item.id)" small outlined dark depressed>Delete</v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
<!--    <goods-input/>-->
<!--    <goods-item :goodsList = 'goodsList'/>-->
    <v-btn @click="flag = !flag">Click me </v-btn>
    <transition>
      <h1 v-show = flag>{{msg}}</h1>
    </transition>

    <div>
      <v-btn primary @click="flag1 = !flag1">Bless for Kobe</v-btn>
      <transition name="my">
        <h1 v-show = flag1>{{bless}}</h1>
      </transition>
    </div>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../components/content/Footer'
// import GoodsInput from './GoodsInput'
// import GoodsItem from './GoodsItem'
export default {
  name: 'Profile',
  components: {
    Footer
    // GoodsInput,
    // GoodsItem
  },
  data () {
    return {
      msg: 'WAR3-Reforged',
      bless: 'RIP Kobe Bryant',
      flag: false,
      flag1: false,
      goodsList: [
        { id: 1, Brand: 'BMW' },
        { id: 2, Brand: 'Ben-z' },
        { id: 3, Brand: 'Volkswagen' }
      ],
      id: '',
      brand: '',
      keywords: ''
    }
  },
  methods: {
    addProduct () {
      this.goodsList.push({ id: this.id, Brand: this.brand })
      this.id = ''
      this.brand = ''
    },
    remove (id) {
      let index = this.goodsList.findIndex(item => item.id === id)
      this.goodsList.splice(index, 1)
    },
    search (keywords) {
      return this.goodsList.filter(item => {
        if (item.Brand.toLowerCase().includes(keywords)) {
          return item
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.v-enter, .v-leave-to
  opacity 0
  transform translateX(100px)
.v-enter-active, .v-leave-active
  transition all 0.8s ease
.my-enter, .my-leave-to
  opacity 0
  transform translateY(100px)
.my-enter-active, .my-leave-active
  transition all 0.8s ease
</style>
