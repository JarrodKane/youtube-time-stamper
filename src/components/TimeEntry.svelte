<script>
	export let title;
	export let updateTime;
	export let currentTime;
	export let submitUpdate;

	const checkNumber = (e) => {
		let time = e.target.value;
		let type = e.target.name;
		if (time.length > 2) {
			time = time.slice(-2);
		}
		updateTime(time, 'Main', type);
	};
</script>

<div class="py-5">
	<h2 class="">Add in a title for the chapter, and hit enter</h2>
	<div>
		<input
			name="hrs"
			type="number"
			class="time-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="20"
			bind:value={currentTime.hrs}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>
		<input
			name="mins"
			type="number"
			class="time-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="60"
			bind:value={currentTime.mins}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>
		<input
			name="secs"
			type="number"
			class="time-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="60"
			bind:value={currentTime.secs}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>

		<div class="flex text-2xl font-light" />
		<input
			class="time-form w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			type="text"
			bind:value={title}
			placeholder="Title"
			on:keypress={submitUpdate}
		/>
	</div>
</div>
