require('./bootstrap')

import { createApp } from 'vue';

import welcome from './components/welcome.vue'

let app=createApp(welcome)

app.mount("#app")

