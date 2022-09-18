const allPrograms = document.querySelectorAll('.program');

function removeActiveFromAllButtons() {
    allPrograms.forEach((elem) => elem.classList.remove('program-active'));
}

window.addEventListener('click', () => {
    removeActiveFromAllButtons();
});

function onProgramClick(elem) {
    removeActiveFromAllButtons();
    elem.classList.add('program-active');
}

allPrograms.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.stopPropagation();
        onProgramClick(elem);
    });
});

const timeElement = document.querySelector('time');

function updatetime() {
    timeElement.innerText = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
}

setInterval(updatetime, 1000);

updatetime();
