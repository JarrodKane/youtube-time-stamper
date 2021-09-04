<script>
	export let editTime;
	export let editTitle;
	export let updateTime;
	export let editing;
  export let submitUpdate;

	const exitModal = (e) => {
		if (e.target.id === 'modal_edit') {
			editing = false;
		}
	};

	const checkNumber = (e) => {
		let time = e.target.value;
		let type = e.target.name;
		if (time.length > 2) {
			time = time.slice(-2);
		}
		updateTime(time, 'Editing', type);
	};


</script>

<div
	on:click={exitModal}
	id="modal_edit"
	class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-10 outline-none focus:outline-none bg-black bg-opacity-70 bg-center bg-cover"
>
	<div
		id="modal-dialog"
		class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white z-50	"
	>
		<input
			name="hrs"
			type="number"
			class="edit-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="20"
			value={editTime.hrs}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>
		<input
			name="mins"
			type="number"
			class="edit-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="60"
			value={editTime.mins}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>
		<input
			name="secs"
			type="number"
			class="edit-form w-3/12 rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			min="0"
			max="60"
			value={editTime.secs}
			on:input={checkNumber}
			on:keypress={submitUpdate}
		/>

		<div class="flex text-2xl font-light" />
		<input
			class="edit-form w-full rounded-md text-lg p-4 border-2 border-gray-200 bg-gray-900 text-gray-100 shadow-md"
			type="text"
			bind:value={editTitle}
			placeholder="Title"
			on:keypress={submitUpdate}
		/>
		<button
			on:click={submitUpdate}
			class="edit-form w-full mt-1 rounded-md text-lg p-4 border-2 border-gray-900 bg-gray-100 text-gray-900 shadow-md hover:bg-green-500 duration-150	 transition-colors"
			>Submit</button
		>
	</div>
</div>
