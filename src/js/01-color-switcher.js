const el = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

el.buttonStart.addEventListener("click", onStartClick);
el.buttonStop.addEventListener("click", onStopClick);

function onStartClick() {
    id = setInterval(() => { el.body.style.backgroundColor = getRandomHexColor() }, 1000);
    el.buttonStart.disabled = true;
    el.buttonStop.disabled = false;
};

function onStopClick() {
    clearInterval(id);
    el.buttonStart.disabled = false;
    el.buttonStop.disabled = true;
}

onStartPage();

function onStartPage() {
    el.buttonStop.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

