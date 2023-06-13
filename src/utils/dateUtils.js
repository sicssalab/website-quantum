const minutesToSeconds = (minutes) => {
	return minutes * 60;
};

//TODO Returns the equivalent of seconds for thousand
const minutesToSecondsDate = (minutes) => {
	return minutesToSeconds(minutes) * 1000;
};

const dateUtils = {
	minutesToSeconds,
	minutesToSecondsDate,
};

export default dateUtils;
