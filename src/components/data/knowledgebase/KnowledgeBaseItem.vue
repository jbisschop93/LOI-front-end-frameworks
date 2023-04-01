<template>
    <div class="text-center">
      <v-btn
        class="d-flex justify-content-start" 
        block
        @click="dialog = true"
      >
        {{ question }}
      </v-btn>
  
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card>
          <v-card-text>
            {{ answer }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Venster sluiten</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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