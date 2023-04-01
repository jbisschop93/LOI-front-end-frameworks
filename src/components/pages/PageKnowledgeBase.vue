<template>
    <the-previous-page-bar 
      page-title="Kennisbase" 
      :previous-route="previousRoute"
    />
    <v-container 
      class="pt-2"
    >
        <v-card
          v-for="(FaqCat) in FaqItems" 
          v-bind:key="FaqCat">
          <v-card-title>{{ FaqCat.title }}</v-card-title>
          <v-list>
            <knowledge-base-list-item 
              v-for="(item) in FaqCat.questions" 
              v-bind:key="item"
              :question="item.question"
              :answer="item.answer"
              />
            </v-list>
        </v-card>
        
        <v-card 
          class="mt-4"
        >
        <v-card-title>Komt u er niet uit?</v-card-title>
        <v-card-text>
          <p>Mocht u tegen problemen aanlopen of iets niet begrijpen dan kunt u ten alle tijden contact opnemen met het hoofdkantoor.</p>
          <address>
            <b>Real Estate Care:</b><br/>
            Leidsedreef 2<br/>
            2352 BA<br/>
            Leiderdorp<br/>
            0597 - 12 34 56
          </address>

          <b>Of:</b><br/>
          <v-btn 
            color="primary"
            @click="notInPrototype" 
            class="mt-2"
          >
            Stuur ons een e-mail
          </v-btn> 
          &nbsp;
          
          <v-btn 
            color="primary"
            @click="notInPrototype" 
            class="mt-2"
          >
            Open live chat
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
    import ThePreviousPageBar from '@/components/template/sections/ThePreviousPageBar.vue';
    import KnowledgeBaseListItem from '@/components/data/knowledgebase/KnowledgeBaseListItem.vue';
  
    export default {
        data(){
          return {
            'FaqItems': [
              { 
                'title': 'Toegewezen rapportages',
                'questions': [
                  {
                    'question': 'Ik heb een vraag over een toegewezen rapportage.',
                    'answer': 'De rapportages worden aangemaakt door de servicedeskmedewerkers van Real Estate Care.Mocht u hier inhoudelijk vragen over hebben dan kunt u het beste met het hoofdkantoor bellen (0597-123456): houd hiervoor het referentienummer van het rapport bij de hand.'
                  },
                  {
                    'question': 'Wat als de bewoner niet thuis is?',
                    'answer': 'Indien de bewoner niet thuis is kunt u een "vervolgafspraak kaart" achterlaten, hierdoor weet de bewoner dat u langs bent geweest en kunnen zij met de servicedesk een nieuwe afspraak inplannen.'
                  },
                  {
                    'question': 'Wat als de bewoner de afspraak wil verzetten?',
                    'answer': 'De rapportages worden geplant door de servicedeskmedewerkers van Real Estate Care.Mocht u hier inhoudelijk vragen over hebben dan kunt u het beste met het hoofdkantoor bellen (0597-123456): houd hiervoor het referentienummer van het rapport bij de hand.'
                  }
                ]
              },
              {
                'title': 'Uitgevoerde rapportages',
                'questions': [
                  {
                    'question': 'Ik wil graag mijn rapport corrigeren, kan dat?',
                    'answer': 'Het is mogelijk om rapportages achteraf aan te passen, let wel op dat het hoofdkantoor hier ook een melding over ontvangt ter controle (probeer de rapportages dus zo veel mogelijk in 1x goed in te vullen).'
                  },
                  {
                    'question': 'Ik heb per ongeluk mijn toegewezen rapportage ingediend, maar deze was nog niet klaar.',
                    'answer': 'Als u op locatie bent kunt u via de "uitgevoerde rapportages" de rapportage terug vinden, en deze gewoon afmaken. Is het in een eerder stadium gebeurd? Neem dan contact op het het hoofdkantoor (0597-123456).'
                  }
                ]
              },
              {
                'title': 'Techniek',
                'questions': [
                  {
                    'question': 'Technische problemen',
                    'answer': 'Ervaart u technische problemen met de app? Neemt u dan contact op met noreply@loi.nl'
                  }
                ]
              }
            ]
          }
        },
        name: 'PageHome',
        components: {
            KnowledgeBaseListItem,
            ThePreviousPageBar
        },
        methods: {
          notInPrototype()
          {
              alert('Deze functie is niet beschikbaar in het prototype!');
          },
        },
        computed: {
          previousRoute()
          {
            return this.$router.options.history.state.back ?? '/'
          }
        },  
        props: [
            'menuItems'
        ]
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .v-card 
    {
      margin-bottom:15px
    }
  </style>
  