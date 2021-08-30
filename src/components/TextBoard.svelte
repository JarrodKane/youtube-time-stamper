<script>
	export let timeBlocks;

	const delteEntry = (e) => {
		let targetId = e.target.id;
		let curTimeBlocks = [...timeBlocks];
		curTimeBlocks = curTimeBlocks.filter((time) => time.id !== targetId);
		timeBlocks = [...curTimeBlocks];
	};
</script>

<div class="w-full flex">
	<div
		id="chapters"
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-300 my-5 bg-opacity-80"
	>
		{#each timeBlocks as time}
			<span id={`timecode-${time.id}`} class="flex my-1">
				<p>
					{time.chapter}
				</p>
			</span>
		{/each}
	</div>
	<div
		class=" text-lg p-4  my-5"
	>
		{#each timeBlocks as time}
			<div
				id={time.id}
				class="px-2 my-1 rounded-md bg-gray-200  text-red-500 hover:text-red-900 cursor-pointer font-semibold	"
				on:click={delteEntry}
			>
				x
			</div>
		{/each}
	</div>
</div>
