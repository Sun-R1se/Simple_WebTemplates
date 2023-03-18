let outputImg = document.querySelector(`.output`);
let outputLink = document.querySelector(`.download`);

let rangeInput = document.querySelector(`#rangeSetting`);

let redButton = document.querySelector(`.red`);
let greenButton = document.querySelector(`.green`);
let blueButton = document.querySelector(`.blue`);
let yellowButton = document.querySelector(`.yellow`);

let color = `b`;
let style = `d2`;

function linkRender () {
	outputImg.src = `../assets/simple information/miniatures/${color}${style}.png`
	outputLink.href = `../assets/simple information/templates/${color}${style}.zip`
}

rangeInput.addEventListener(`input`, function (event) {
	if (event.target.value == 0) {
		style = `d1`;
	} else if (event.target.value == 1) {
		style = `d2`;
	} else if (event.target.value == 2) {
		style = `d3`;
	} else if (event.target.value == 3) {
		style = `m1`;
	} else if (event.target.value == 4) {
		style = `m2`;
	} else if (event.target.value == 5) {
		style = `m3`;
	} else if (event.target.value == 6) {
		style = `u1`;
	} else if (event.target.value == 7) {
		style = `u2`;
	} else {
		style = `u3`;
	}
	linkRender();
});

redButton.addEventListener(`click`, function () {
	color = `r`;
	linkRender();
});

greenButton.addEventListener(`click`, function () {
	color = `g`;
	linkRender();
});

blueButton.addEventListener(`click`, function () {
	color = `b`;
	linkRender();
});

yellowButton.addEventListener(`click`, function () {
	color = `y`;
	linkRender();
});
