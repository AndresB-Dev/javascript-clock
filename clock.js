//simple clock | this works using nodeJS

function c_clock() {
	let seconds = 0, minutes = 0, hours = 0;

	setInterval(function() {
		seconds++;
		console.log(seconds);
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			console.log(minutes + " " + "minute/s");
		}

		if (minutes === 60) {
			minutes = 0;
			hours++;
			console.log(hours + " " + "hour/s");
		}
	},1000); //1 second
}

c_clock();