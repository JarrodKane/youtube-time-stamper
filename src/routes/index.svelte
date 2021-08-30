<script>
	// IMPORTS
	import { getVideoIdFromUrl } from '../helpers/getYoutubeID';
	import Youtube from '../components/Youtube.svelte';
	import { formatTime } from '../helpers/formatTime';

	import TextBoard from '../components/TextBoard.svelte';
	import { v4 as uuidv4 } from 'uuid';



	// STATE
	let videoURL = '';
	let videoId = 'QwAU0oT';
	let playerTime = 0;
	let player;
	let title = '';
	let timeBlocks = [];

	// Grabs the video ID and passes that to the video player to set the video we want to timecode for
	const getVideo = (e) => {
		e.preventDefault();
		videoId = getVideoIdFromUrl(videoURL);
	};

	const delteEntry = (id) => {
		let curTimeBlocks = [...timeBlocks];
		curTimeBlocks = curTimeBlocks.filter((time) => time.id === id);
		timeBlocks = [...curTimeBlocks];
	};

	const addTimeCode = (e) => {
		e.preventDefault();
		let selectedTime = formatTime(playerTime);
		let newTime = `${selectedTime} - ${title}`;
		let uuid = uuidv4();
		let timeEntry = { id: uuid, chapter: newTime };
		timeBlocks = [...timeBlocks, timeEntry];
		title = '';
	};
</script>

<svelte:head>
	<title>Youtube Time Code Maker</title>
</svelte:head>

<div>
	<div class="py-5">
		<p>Add in a youtube video, and then press enter</p>

		<form on:submit={getVideo}>
			<input
				class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-black text-gray-100 shadow-md"
				type="text"
				bind:value={videoURL}
				placeholder="Add in Youtube link"
			/>
		</form>
	</div>

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
</div>

<div class="flex flex-col align-center items-center">
	<!-- Recreates the video element for each new youtube video added  -->
	{#key videoId}
		<Youtube {videoId} bind:playerTime bind:player />
	{/key}

	<TextBoard bind:timeBlocks />
</div>
