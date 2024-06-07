import "/src/assets/main.css"
import "/node_modules/bulma/css/bulma.min.css"

import { createApp } from "/node_modules/.vite/deps/vue.js?v=0f9184de"
import router from "/src/router/index.js"
import App from "/src/App.vue"

createApp(App).use(router).mount('#app')
