<script context="module">
  let YouTubeIframeAPIReady = false;
</script>

<script>
  

	export let playerTime;
	export let  player;

  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  let divId = "player_" + parseInt(Math.random() * 100000).toString();
	

  export let videoId;
  export let height = "390";
  export let width = "640";
  onMount(() => {
    let ytTagUrl = "https://www.youtube.com/iframe_api";
    if (!isMyScriptLoaded(ytTagUrl)) {
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement("script");
      tag.src = ytTagUrl;
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    window.onYouTubeIframeAPIReady = function() {
      //console.log('hello')
      window.dispatchEvent(new Event("YouTubeIframeAPIReady"));
    };
    window.addEventListener("YouTubeIframeAPIReady", function() {
      if (YouTubeIframeAPIReady == false) {
        // first load of an YT Video on this project
        YouTubeIframeAPIReady = true; // now the Player can be created
        createPlayer();
      }
    });
    function createPlayer() {
      player = new YT.Player(divId, {
        height,
        width,
        videoId: videoId,
        events: {
          //'onReady': onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    }
    if (YouTubeIframeAPIReady) {
      createPlayer(); // if the YT Script is ready, we can create our player
    }
  });
  function isMyScriptLoaded(url = "") {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (scripts[i].src == url) return true;
    }
    return false;
  }

	// Updates the state for where we are up too
  function onPlayerStateChange({ data }) {
// What the data means
		//-1 (unstarted)
// 0 (ended)
// 1 (playing)
// 2 (paused)
// 3 (buffering)
// 5 (video cued).
// Once the video is paused it gets the new time
if (data === 2) {
	playerTime = player.getCurrentTime()
}
	
  
  }

</script>

<div class="yt-component">
  <div id={divId} />
</div>