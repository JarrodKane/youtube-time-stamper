// https://svelte.dev/repl/3194502389af4e22991f8bb0c61d65cf?version=3.16.5
<script>
	import { onMount } from 'svelte';
	
	export let timeBlocks;

	let textarea;
	
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={timeBlocks} bind:this={textarea}></textarea>