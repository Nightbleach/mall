<template>
  <v-container fluid>
    <v-footer
      height="70px"
      app
      padless
      class="pink lighten-4"
    >
      <v-row
        justify="center"
        no-gutters
        v-for="item in footItems"
        :key="item.id"
      >
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              class="mx-4 white--text"
              icon
              :to="item.path"
              v-on="on"
            >
              <v-icon size='24px' class="btnActive">{{item.icon}}</v-icon>
            </v-btn>
          </template>
          <span>{{item.tooltip}}</span>
        </v-tooltip>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footItems: [
        { icon: 'fal fa-igloo', path: '/', tooltip: 'Home' },
        { icon: 'fal fa-coins', path: '/category', tooltip: 'Category' },
        { icon: 'fal fa-shopping-cart', path: '/cart', tooltip: 'Cart' },
        { icon: 'fal fa-female', path: '/profile', tooltip: 'Profile' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
