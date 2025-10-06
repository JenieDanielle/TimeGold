
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Material from '@primeuix/themes/material';
import Lara from '@primeuix/themes/lara';
import App from './App.vue'
import router from './router'




const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    options: {
        prefix: 'p',
        darkModeSelector: false,
    }
});

app.mount('#app');
