// Code taken from https://stackoverflow.com/questions/64112762/convert-seconds-to-minutes-and-seconds-in-mmss-format

export const formatTime = (time) => {
	let hrs = ~~(time / 3600);
	let mins = ~~((time % 3600) / 60);
	let secs = ~~time % 60;

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = '';
	if (hrs < 10) {
		ret += '0' + hrs + ':' + (mins < 10 ? '0' : '');
	} else {
		ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
	}

	ret += '' + String(mins).padStart(2, '0') + ':' + (secs < 10 ? '0' : '');
	ret += '' + secs;

	return ret;
};
