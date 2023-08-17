const el = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
let id = null;

el.buttonStart.addEventListener("click", onStartClick);
el.buttonStop.addEventListener("click", onStopClick);

function onStartClick() {
    id = setInterval(() => { el.body.style.backgroundColor = getRandomHexColor() }, 1000);
    el.buttonStart.disabled = true;
};

function onStopClick() {
    clearInterval(id);
    el.buttonStart.disabled = false;

}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

