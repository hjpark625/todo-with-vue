import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';

library.add(fas, far, fab);

const app = createApp(App).use(router).mount('#app');

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
