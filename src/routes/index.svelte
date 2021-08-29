<script>
  // IMPORTS
  import VideoPlayer from "../components/VideoPlayer.svelte"
  import {getVideoIdFromUrl} from "../helpers/getYoutubeID"
  import Youtube from "../components/Youtube.svelte"
  

  // STATE
  let videoURL = "";
  let videoID= "UU7MgYIbtAk";
  let playerTime = 0;
  let player;

  

  // Grabs the video ID and passes that to the video player to set the video we want to timecode for
  let getVideo = (e) =>{
    e.preventDefault()
    videoID = getVideoIdFromUrl(videoURL)
  }

  const getInformation = () => {
   console.log(player)
  }

  

  
</script>

<svelte:head>
  <title>Youtube Time Code Maker</title>
</svelte:head>


  <h1>Youtube Time Code Maker</h1>
  <form  on:submit={getVideo}>
    <input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={videoURL} placeholder="Add in Youtube link" >
  </form>
  

  
  
  <!-- <VideoPlayer videoID={videoID}/> -->

  <button on:click={getInformation}>Test time</button> 
  <div>{playerTime}</div>
  

  <Youtube videoId={videoID} bind:playerTime={playerTime} bind:player={player}/>