<template>
  <v-simple-table>
    <template v-slot:default>
      <p>{{goodsParams.key}}</p>
      <tbody>
      <tr v-for="item in goodsParams.set" :key="item.name">
        <td>{{ item.key }}</td>
        <td>{{ item.value}}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'PrParams',
  props: {
    goodsParams: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
