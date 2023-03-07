import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faHouseChimneyCrack,
  faHouseCircleExclamation,
  faListCheck,
  faListOl
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouseChimneyCrack)
library.add(faHouseCircleExclamation)
library.add(faListCheck)
library.add(faListOl)

loadFonts()

createApp(App)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
