<script>
	export let timeBlocks;
	export let wipeChapters;
	export let selectEntry;
	export let editChapter;

	const delteEntry = (e) => {
		let targetId = e.target.id;
		let curTimeBlocks = [...timeBlocks];
		curTimeBlocks = curTimeBlocks.filter((time) => time.id !== targetId);
		timeBlocks = [...curTimeBlocks];
	};


</script>

<button
	class="px-2 my-1 rounded-md bg-gray-200  text-red-500 hover:text-red-900 cursor-pointer font-semibold"
	on:click={wipeChapters}>Remove all chapters</button
>
<div class="w-full flex">
	<div
		id="chapters"
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-300 my-5 bg-opacity-80"
	>
		{#each timeBlocks as chapter}
			<span id={`timecode-${chapter.id}`} class="flex my-1">
				<p>
					{chapter.stringTime} - {chapter.title}
				</p>
			</span>
		{/each}
	</div>
	<div class=" text-lg p-4  my-5">
		{#each timeBlocks as chapter}
			<div class="flex">
				<div
					id={chapter.id}
					class="px-2 my-1 rounded-md bg-gray-200  text-red-500 hover:text-red-900 cursor-pointer font-semibold	"
					on:click={delteEntry}
				>
					x
				</div>
				<div
					id={chapter.id}
					class="px-2 my-1 rounded-md bg-gray-200 hover:bg-yellow-300  text-gray-800 hover:text-blue-700 cursor-pointer font-semibold	ml-1"
					on:click={editChapter}
				>
					e
				</div>
			</div>
		{/each}
	</div>
</div>
