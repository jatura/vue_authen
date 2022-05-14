import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from './plugins/font-awesome'

const app = createApp(App)

app.use(router).use(store).component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
