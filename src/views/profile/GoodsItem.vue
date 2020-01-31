<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Brand</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in goodsList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.Brand }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'goodsItem',
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
