<script>
	// IMPORTS
	import { getVideoIdFromUrl } from '../helpers/getYoutubeID';
	import Youtube from '../components/Youtube.svelte';
	import { formatTime } from '../helpers/formatTime';

	import TextBoard from '../components/TextBoard.svelte';
	import TimeEntry from '../components/TimeEntry.svelte';
	import { v4 as uuidv4 } from 'uuid';

	// STATE
	let videoURL = '';
	let videoId = 'UU7MgYIbtAk';
	let player;
	let title = '';
	let timeBlocks = [];
	let currentTime = { hours: 0, mins: 0, secs: 0 };

	// Grabs the video ID and passes that to the video player to set the video we want to timecode for
	const getVideo = (e) => {
		e.preventDefault();
		videoId = getVideoIdFromUrl(videoURL);
		reset();
	};

	const reset = () => {
		title = '';
		currentTime = { hours: 0, mins: 0, secs: 0 };
	};

	const updateTime = (t, type) => {
		if (type === 'Youtube') {
			let { hours, mins, secs } = formatTime(t);
			currentTime = { hours: hours, mins: mins, secs: secs };
		} else {
			currentTime[type] = t;
		}
	};

	const delteEntry = (id) => {
		let curTimeBlocks = [...timeBlocks];
		curTimeBlocks = curTimeBlocks.filter((time) => time.id === id);
		timeBlocks = [...curTimeBlocks];
	};

	const editEntry = (id) => {
		let curTimeBlocks = [...timeBlocks];
		curTimeBlocks = curTimeBlocks.filter((time) => time.id === id);
		timeBlocks = [...curTimeBlocks];
	};

	const wipeChapters = () =>{
		timeBlocks = [];
	}

	const addTimeCode = (e) => {
		e.preventDefault();
		let stringHours = String(currentTime.hours).padStart(2, '0');
		let stringMins = String(currentTime.mins).padStart(2, '0');
		let stringSecs = String(currentTime.secs).padStart(2, '0');
		let newTime = `${stringHours}:${stringMins}:${stringSecs} - ${title}`;
		let uuid = uuidv4();
		let timeEntry = { id: uuid, chapter: newTime };
		timeBlocks = [...timeBlocks, timeEntry];
		reset();
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

	<TimeEntry {addTimeCode} {updateTime} bind:currentTime bind:title />
</div>

<div class="flex flex-col align-center items-center">
	<!-- Recreates the video element for each new youtube video added  -->
	{#key videoId}
		<Youtube {videoId} {updateTime} bind:player />
	{/key}

	<TextBoard bind:timeBlocks {wipeChapters}/>
</div>
