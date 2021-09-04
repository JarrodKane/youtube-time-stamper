<script>
	export let addTimeCode;
	export let title;
	export let updateTime;
	export let currentTime;

	const checkNumber = (e) => {
		let time = e.target.value;
		let type = e.target.name;
		if (time.length > 2) {
			time = time.slice(-2);
		}
		updateTime(time, type);
	};
</script>

<div class="py-5">
	<h2 class="">Add in a title for the chapter, and hit enter</h2>

	<input
		name="hours"
		class="w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
		type="number"
		min="0"
		max="20"
		bind:value={currentTime.hours}
    on:input={checkNumber}
	/>
	<input
		name="mins"
		class="w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
		type="number"
		min="0"
		max="60"
		bind:value={currentTime.mins}
		on:input={checkNumber}
	/>
	<input
		name="secs"
		class="w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
		type="number"
		min="0"
		max="60"
		bind:value={currentTime.secs}
		on:input={checkNumber}
	/>
	<form on:submit={addTimeCode}>
		<div class="flex text-2xl font-light" />
		<input
			class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-black text-gray-100 shadow-md"
			type="text"
			bind:value={title}
			placeholder="Title"
		/>
	</form>
</div>
