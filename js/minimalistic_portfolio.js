let outputImg = document.querySelector(`.output`);
let outputLink = document.querySelector(`.download`);

let rangeInput = document.querySelector(`#rangeSetting`);

let firstButton = document.querySelector(`.first`);
let secondButton = document.querySelector(`.second`);
let thirdButton = document.querySelector(`.third`);
let fourthButton = document.querySelector(`.fourth`);

let color = 1;
let style = 2;

function linkRender () {
	outputImg.src = `../assets/minimalistic portfolio/miniatures/${color}${style}.png`
	outputLink.href = `../assets/minimalistic portfolio/templates/${color}${style}.zip`
}

rangeInput.addEventListener(`input`, function (event) {
	style = Number(event.target.value) + 1;
	linkRender();
});

firstButton.addEventListener(`click`, function () {
	color = 1;
	linkRender();
});

secondButton.addEventListener(`click`, function () {
	color = 2;
	linkRender();
});

thirdButton.addEventListener(`click`, function () {
	color = 3;
	linkRender();
});

fourthButton.addEventListener(`click`, function () {
	color = 4;
	linkRender();
});
