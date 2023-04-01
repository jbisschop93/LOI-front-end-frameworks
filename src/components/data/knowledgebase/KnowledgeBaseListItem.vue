<template>
    <v-list-item
      class="d-flex justify-content-start knowledgebasebtn" 
      @click="dialog = true"
    >
      {{ question }}
    </v-list-item>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          {{ answer }}
        </v-card-text>
        <v-card-actions>
          <v-btn 
            color="primary" 
            block 
            @click="dialog = false"
          >
            Venster sluiten
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: [
        'question',
        'answer'
    ]
  }
</script>
<style scoped>
  .knowledgebasebtn
  {
    margin-bottom:5px;
    box-shadow:none
  }
</style>