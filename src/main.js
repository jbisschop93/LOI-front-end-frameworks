import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

//Import router
import router from '@/router'

//Import store
import store from '@/store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faClipboardCheck,
  faGraduationCap,
  faGears,
  faListCheck,
  faRightFromBracket,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faClipboardCheck)
library.add(faListCheck)
library.add(faGraduationCap)
library.add(faGears)
library.add(faRightFromBracket)
library.add(faCircleQuestion)

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
