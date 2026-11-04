import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { applyTheme, prefs } from './composables/prefs';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/text.css';
import './styles/pricing.css';
import './styles/utilities.css';
import './styles/api.css';
import './styles/not-found.css';

applyTheme(prefs.theme);
createApp(App).use(router).mount('#app');
