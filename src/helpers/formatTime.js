// Code taken from

export const formatTime = (time) => {
	let hrs = ~~(time / 3600);
	let mins = ~~((time % 3600) / 60);
	let secs = ~~time % 60;

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = '';

	ret += '' + String(hrs).padStart(2, '0') + ':' + (mins < 10 ? '0' : '');

	ret += '' + String(mins).padStart(1, '0') + ':' + (secs < 10 ? '0' : '');
	ret += '' + secs;

	return ret;
};
