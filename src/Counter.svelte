<div class=counter>
  Counter({data.name})
  <div class=stack>
    <div class="button" on:click={inc}>+</div>
    <div class="button" on:click={dec}>-</div>
  </div>
  <span class=number>
    {data.value}
  </span>
  <label class=auto>
    <input type=checkbox bind:checked={auto}>auto
  </label>
</div>
<script>
	import { createEventDispatcher } from 'svelte';
	import { utteranceLangCounter } from './lang.js';
	const dispatch = createEventDispatcher();

	export let data;
	export let auto;
	autodec();
	function inc(){
		data.value++;
		dispatch('counterChanged', {data, text: utteranceLangCounter(data).up });
	}
	function dec(){
		data.value--;
		dispatch('counterChanged', {data, text: utteranceLangCounter(data).down });
	}
	function autodec(){
		setTimeout(
			() => {
				if(auto){
					if(data.value > 0) {
						data.value--;
						dispatch('counterChanged', { data, text:utteranceLangCounter(data).simple });
					} else {
						dispatch('counterChanged', { data, text:utteranceLangCounter(data).finish });
						auto = null;
					}
				}
				autodec();
			},
			3000,
		)
	}
</script>
<style>
	div.counter{
		display: inline-block;
	}
	.counter>.stack{
		display: inline-block;
	}
	.counter>.number{
		font-size: 32px;
		display: inline-block;
	}
	.counter>.auto{
		display: inline-block;
	}
	.counter>.stack>.button {
    box-shadow: inset 0px 0px 1px #FFF, 0px 0px 1px #444;
    user-select: none;
    background: #CCC;
		border-radius: 2px;
		cursor: pointer;
		display: block;
		padding: 0px;
		margin: 1px;
		font-size: 10px;
		text-align: center;
		border: 1px solid #BBB;
		min-width: 24px;
		min-height: 12px;
		max-width: 24px;
		max-height: 12px;
		width: 24px;
		height: 12px;
	}
	.counter>.stack>.button:hover{
    box-shadow: inset 0px 0px 3px #FFF, 0px 0px 1px #444;
    user-select: none;
		background: #EEE;
	}
</style>