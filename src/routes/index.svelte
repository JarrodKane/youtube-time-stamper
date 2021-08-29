<script>
	// IMPORTS
	import { getVideoIdFromUrl } from '../helpers/getYoutubeID';
	import Youtube from '../components/Youtube.svelte';
	import { formatTime } from '../helpers/formatTime';

	// STATE
	let videoURL = '';
	let videoId = 'UU7MgYIbtAk';
	let playerTime = 0;
	let player;
	let title = '';
	let timeBlocks = [];

	// Grabs the video ID and passes that to the video player to set the video we want to timecode for
	const getVideo = (e) => {
		e.preventDefault();
		videoId = getVideoIdFromUrl(videoURL);
	};

	const getInformation = () => {
		console.log(formatTime(playerTime));
	};

	const addTimeCode = (e) => {
		e.preventDefault();
		console.log('testing');
		let selectedTime = formatTime(playerTime);
		let newTime = `${selectedTime} - ${title}`;
		console.log(timeBlocks);
		timeBlocks = [...timeBlocks, newTime];

		title = '';
	};
</script>

<svelte:head>
	<title>Youtube Time Code Maker</title>
</svelte:head>

<h1 class="text-3xl">Youtube Time Code Maker</h1>
<div>
  <p>Add in a youtube video, and then press enter</p>
</div>
<form on:submit={getVideo} class="pb-5">
	<input
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text"
		bind:value={videoURL}
		placeholder="Add in Youtube link"
	/>
</form>

<div>
  <h2 class="">Add in a title for the time stamp and hit enter</h2>
</div>
<form on:submit={addTimeCode}>
	<input
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text"
		bind:value={title}
		placeholder="Title"
	/>
</form>

<div class="flex flex-col align-center items-center	">
	<!-- Recreates the video element for each new youtube video added  -->
	{#key videoId}
		<Youtube {videoId} bind:playerTime bind:player />
	{/key}

	<div class="w-full rounded-md text-lg p-4 border-2 border-gray-200">
		{#each timeBlocks as cat}
			<p>
				{cat}
			</p>
		{/each}
	</div>
</div>
