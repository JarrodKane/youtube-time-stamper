// Takes in the input video URL and returns the ID of that youtube video only

export const getVideoIdFromUrl = (value: string) => {
	const regEx =
		'^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';

	const match = value.match(regEx);
	if (match) {
		console.log(match[1]);
		return match[1];
	}
};
