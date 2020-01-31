<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="id"
            outlined
            v-model="productId"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Brand"
            outlined
            v-model="brand"
          />
        </v-col>
        <v-col cols="4"  class="pt-5">
         <v-btn @click="addProduct" class="blue-grey darken-4 white--text text-capitalize" >Add Product</v-btn>
        </v-col>
        <v-col>
          <v-text-field label="Search"/>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>

<script>
export default {
  name: 'GoodsInput',
  data () {
    return {
      productId: '',
      brand: ''
    }
  },
  methods: {
    addProduct () {
    }
  }
}
</script>

<style scoped>

</style>
