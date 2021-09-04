<script>
	export let addTimeCode;
	export let playerTime;
	export let formatTime;
	export let title;
</script>

<div class="py-5">
	<h2 class="">Add in a title for the chapter, and hit enter</h2>

	<form on:submit={addTimeCode}>
		<div class="flex text-2xl font-light">
			{formatTime(playerTime)}
		</div>
		<input
			class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-black text-gray-100 shadow-md"
			type="text"
			bind:value={title}
			placeholder="Title"
		/>
	</form>
</div>
