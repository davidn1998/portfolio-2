import 'highlight.js/styles/solarized-light.css';
import VueHighlightJS from 'vue3-highlightjs';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueHighlightJS);
});
