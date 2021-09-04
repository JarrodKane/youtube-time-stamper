<script>
	// IMPORTS
	import { getVideoIdFromUrl } from '../helpers/getYoutubeID';
	import Youtube from '../components/Youtube.svelte';
	import { formatTime } from '../helpers/formatTime';

	import TextBoard from '../components/TextBoard.svelte';
	import TimeEntry from '../components/TimeEntry.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import EditModal from '../components/EditModal.svelte';

	// STATE
	let videoURL = '';
	let videoId = 'UU7MgYIbtAk';
	let player;
	let title = '';
	let timeBlocks = [];
	let currentTime = { hrs: 0, mins: 0, secs: 0 };
	let editing = false;

	// TODO: Move all the edit options into a single object
	let editTime = { hrs: 0, mins: 0, secs: 0 };
	let editTitle = '';
	let editId = -1;

	// Grabs the video ID and passes that to the video player to set the video we want to timecode for
	const getVideo = (e) => {
		e.preventDefault();
		videoId = getVideoIdFromUrl(videoURL);
		reset();
	};

	const reset = () => {
		title = '';
		currentTime = { hrs: 0, mins: 0, secs: 0 };
	};

	// Selects an entry to edit
	const editChapter = (e) => {
		let targetId = e.target.id;
		let editBlock = timeBlocks.find((chapter) => chapter.id === targetId);
		editTime = editBlock.time;
		editTitle = editBlock.title;
		editId = targetId;
		editing = true;
	};

	// This is hit on input change or when someone starts or pauses the youtube video
	const updateTime = (t, caller, type) => {
		if (caller === 'Youtube') {
			let { hrs, mins, secs } = formatTime(t);
			currentTime = { hrs: hrs, mins: mins, secs: secs };
		} else if (caller === 'Editing') {
			editTime[type] = t;
		} else {
			currentTime[type] = t;
		}
	};

	const wipeChapters = () => {
		timeBlocks = [];
	};

	const addUpdate = (e) => {
		let objIndex = timeBlocks.findIndex((obj) => obj.id == editId);
		timeBlocks[objIndex].time = editTime;
		timeBlocks[objIndex].title = editTitle;
		timeBlocks[objIndex].stringTime = creatString(editTime);

		editing = false;
	};

	const addTimeCode = (e) => {
		// e.preventDefault();
		if (editing) {
		} else {
			let uuid = uuidv4();
			let timeEntry = {
				id: uuid,
				time: currentTime,
				title: title,
				stringTime: creatString(currentTime)
			};
			timeBlocks = [...timeBlocks, timeEntry];
			reset();
		}
	};

	const creatString = (time) => {
		let stringhrs = String(time.hrs).padStart(2, '0');
		let stringMins = String(time.mins).padStart(2, '0');
		let stringSecs = String(time.secs).padStart(2, '0');
		let ret = `${stringhrs}:${stringMins}:${stringSecs}`;
		return ret;
	};

	const submitUpdate = (e) => {
		let isEditForm = e.target.classList.contains('edit-form');
		if (isEditForm) {
			if (e.charCode === 13) {
				addUpdate();
			} else if (e.target.type === 'submit') {
				addUpdate();
			}
		} else {
			if (e.charCode === 13) {
				addTimeCode();
			} else if (e.target.type === 'submit') {
				addTimeCode();
			}
		}
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
				class="w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
				type="text"
				bind:value={videoURL}
				placeholder="Add in Youtube link"
			/>
		</form>
	</div>

	{#if editing}
		<EditModal {updateTime} {addUpdate} {submitUpdate} bind:editTitle bind:editTime bind:editing />
	{/if}

	<TimeEntry {updateTime} {submitUpdate} bind:currentTime bind:title />
</div>

<div class="flex flex-col align-center items-center">
	<!-- Recreates the video element for each new youtube video added  -->
	{#key videoId}
		<Youtube {videoId} {updateTime} bind:player />
	{/key}

	<TextBoard bind:timeBlocks {wipeChapters} {editChapter} />
</div>
