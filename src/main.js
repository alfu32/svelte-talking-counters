import App from './App.svelte';

var app = new App({
	target: document.body
});
console.log(window.speechSynthesis.getVoices())

export default app;