<div class=title>
	<h1>Talking counters</h1>
	<div class=language>
		<div>language</div>
		<select on:change="{changeVoice}" bind:value={voice}>
			{#each voices as voice, i}
			<option value={voice}>{voice.name}</option>
			{/each}
		</select>
	</div>
</div>
{#each counters as counter, i}
	<div>
		<Counter data={counter} on:counterChanged={gotValue(i)}/>
		<button on:click={deleteCounter(i)}>rem</button>
	</div>
{/each}
<input bind:value="{newName}"/>
{newName}
<button on:click={addCounter}>
	Add Counter
</button>
<div>
	Voices
</div>
<style>
	.title {
		display: block;
	}
	.title>h1 {
		display: inline-block;
	}
	.title>.language {
		display: inline-block;
	}
</style>
<script>
	import Counter from './Counter.svelte';
	import { utteranceLangApp } from './lang.js';

	let name = 'world';
	let newName = '';
	let voices = speechSynthesis.getVoices();
	setTimeout( () => {
		voices = speechSynthesis.getVoices();
		voice = voices[0];
	}, 100);
	function update(){
		console.log('update');
	}
	let voice = voices[0];
	let counters = [
		{name: 'one', value: 20},
		{name: 'two', value: 50},
		{name: 'three', value: 25}
	];
	$: voices = () => {
		console.log('polling', window.speechSynthesis.getVoices());
		return window.speechSynthesis.getVoices();
	};
	let speakTo;
	function addCounter(){
		voices = window.speechSynthesis.getVoices();
		counters = counters.concat([{name: newName, value: 0}]);
		newName = '';
	}
	function gotValue(i){
		return (event) => {
			clearTimeout(speakTo);
			speakTo = setTimeout(()=>{
				console.log(i,counters[i],event.detail,event.detail.text[voice.lang]);
				speak(event.detail.text[voice.lang]);
			},500)
		}
	}
	function deleteCounter(i){
		return (event) => {
			setTimeout(()=>{
				counters = counters.filter( (c,j) => i !== j);
			},500)
		}
	}
	function changeVoice(event){
		clearTimeout(speakTo);
		speakTo = setTimeout(()=>{
			window.speechSynthesis.voice = voice;
			speak(utteranceLangApp[voice.lang]);
		},500)
	}
	function speak(str){
		let utterance = new SpeechSynthesisUtterance(str)
		utterance.voice = voice;
		window.speechSynthesis.speak(utterance);
	}
	
</script>