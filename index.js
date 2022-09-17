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

allPrograms.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        e.stopPropagation();
        onProgramClick(elem);
    });
});
