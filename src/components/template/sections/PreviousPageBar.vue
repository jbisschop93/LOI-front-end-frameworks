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
      return this.previousRoute ?? '/'
    }
  }
}
</script>