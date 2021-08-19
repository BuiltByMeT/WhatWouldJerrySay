function changeButtons () {
	// this functionality is gone but keeping it for js practice/notes
	let randomButtonOnly = true;
	let filterButtons = ['inspirational-jerry','funny-jerry','deep-jerry','sad-jerry','comforting-jerry','congratulatory-jerry'];
	
	for (let i = 0; i < filterButtons.length; i++) {
		if (randomButtonOnly) {
			document.getElementById(filterButtons[i]).hidden = false;
			console.log('unhide ' + filterButtons[i])
		} else {
			document.getElementById(filterButtons[i]).hidden = true;
			console.log('hide ' + filterButtons[i])
		}
	}

	if (randomButtonOnly) {
		randomButtonOnly = false;
		document.getElementById("random-jerry").hidden = true;
		document.getElementById("change-random-filter").innerHTML = "Change to Random Button";
	} else {
		randomButtonOnly = true;
		document.getElementById("random-jerry").hidden = false;
		document.getElementById("change-random-filter").innerHTML = "Change to Filter Buttons";
	}
}

function filterJerries(emotion) {
	// there's probably a much cleaner way to do this but
	// I'm not sure yet how to .filter/.forEach on an
	// array inside an object inside an array where the
	// individual objects aren't named

	// filter acceptable Jerries depending on button selected
	let emotionalJerries = [];
	for (let i = 0; i < jerray.length; i++) {
		let thisJerrysEmotions = jerray[i].emotion;
		
		for (let j = 0; j < thisJerrysEmotions.length; j++) {
			if (thisJerrysEmotions[j] === emotion)
				emotionalJerries.push(jerray[i]);
		}
	}
	//console.log(emotionalJerries);
	return emotionalJerries;
}

function randomJerry(emotion) {
	// jerray is in listofjerries.js
	// select a random Jerry to display

	// a little extra to have some fun with the let names
	let acceptableJerries = filterJerries(emotion);
	let howManyJerries = acceptableJerries.length;
	let whichJerry = Math.floor(Math.random() * howManyJerries);
	let theOneTrueJerry = acceptableJerries[whichJerry].url;
	let theOneTrueJerrysLink = acceptableJerries[whichJerry].link;
	
	document.getElementById('jerry-gif').setAttribute('src',theOneTrueJerry);
	document.getElementById('giphy-link').href = theOneTrueJerry;
}

function adjustIframeHeight() {
	// iframe should always be a box so just grab the computed width
	// (90% max) and set that as the height
	let iframe = document.getElementById('jerry-gif');
	let iframeWidth = iframe.offsetWidth;
	iframe.height = iframeWidth;
}

// scale the iframe appropriately for the window size
// so that there aren't huge dead spaces w/ smaller windows
adjustIframeHeight();
window.addEventListener('resize',adjustIframeHeight);