import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import '@/assets/scss/core.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.mount('#app');
