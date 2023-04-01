<template>
  <v-toolbar>
    <v-btn
      icon
      class="hidden-xs-only"
      :to="previousPage"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'PreviousPageBar',
  props: [
    'pageTitle',
    'previousRoute'
  ],
  computed: {
    previousPage()
    {
      if(this.previousRoute)
      {
        return this.previousRoute
      } else {
        return this.hasHistory() ? this.$router.options.history.state.back : '/'
      }
    }
  },
  methods: {
    hasHistory () { 
      return window.history.length > 2 
    }
  }
}
</script>