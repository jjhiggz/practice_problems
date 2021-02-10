const weekdays = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday"
];

function weekdayAdder(day, number) {
	let currentIndex = weekdays.findIndex(
		weekday => weekday === day.toLowerCase()
	);
	return weekdays[(currentIndex + number) % 7];
}

module.exports = {
	weekdayAdder
};
