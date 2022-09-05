require('./bootstrap')

import { createApp } from 'vue';
import { store } from './store'
import welcome from './components/welcome.vue'

let app=createApp(welcome)
app.use(store);
app.mount("#app")

