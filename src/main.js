import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// import './fonts/index.css';
import './style.css';
// import App from './App.vue';

import routes from './routes.js';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// import App from './pages/dont/Start.vue';
import App from './components/App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');


// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// // import App from './components/App.vue'
//
// createApp(App).mount('#app')
