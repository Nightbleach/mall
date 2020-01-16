<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="1">
        <v-btn @click="loadMore" icon color="pink">
          <v-icon>fal fa-arrow-circle-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoadMore',
  methods: {
    loadMore () {
      this.$emit('loadMore')
    }
  }
}
</script>

<style scoped>

</style>
