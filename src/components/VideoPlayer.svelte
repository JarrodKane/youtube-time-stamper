<script>



// PROPS of the video passed in
export let videoID;
	// These values are bound to properties of the video
	let time = 0;
	// let duration = document.getElementById('iframeWindow');
	let paused = true;
</script>

<div>
  <iframe id="iframeWindow" width="560" height="315" src="https://www.youtube.com/embed/{videoID}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
