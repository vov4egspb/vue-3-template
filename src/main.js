import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import axiosInterceptors from '@/axiosInterceptor';
import './assets/main.css';

axiosInterceptors();

const app = createApp(App);

app.use(createPinia()).use(router).use(PrimeVue).mount('#app');
