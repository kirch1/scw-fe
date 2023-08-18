import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import router from './router';
import './index.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.mount('#app');
