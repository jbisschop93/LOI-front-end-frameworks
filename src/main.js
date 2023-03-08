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
  faClipboardCheck,
  faGraduationCap,
  faGears,
  faListCheck
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faClipboardCheck)
library.add(faListCheck)
library.add(faGraduationCap)
library.add(faGears)

loadFonts()

createApp(App)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
