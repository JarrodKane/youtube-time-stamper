export const formatTime = (time) => {
	let hrs = ~~(time / 3600);
	let mins = ~~((time % 3600) / 60);
	let secs = ~~time % 60;

	let ret = {
		hrs: hrs,
		mins: mins,
		secs: secs
	};

	return ret;
};
