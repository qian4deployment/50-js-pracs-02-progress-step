const points = document.querySelectorAll('.point');
const progress = document.querySelector('.progress-line .progress');
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentActive = 0;
let lineStop = 0;

nextBtn.addEventListener('click', () => {
    if (nextBtn.classList.contains('active')) {
        // increase currentActive
        updatePoints('next');
        updateProgress();
        updateBtnAble();
    }
});

preBtn.addEventListener('click', () => {
    if (preBtn.classList.contains('active')) {
        // increase currentActive
        updatePoints('prev');
        updateProgress();
        updateBtnAble();
    }
});


function updatePoints(instruction) {
    if (instruction === 'next') {
        if (currentActive === points.length - 1) return;
        currentActive++;
        points[currentActive].classList.add('active');
    } else {
        if (currentActive === 0) return;
        points[currentActive].classList.remove('active');
        currentActive--;
    }
}

function updateProgress() {
    lineStop = (currentActive / (points.length - 1)) * 100;
    progress.style.width = `${lineStop}%`;
}

function updateBtnAble() {
    if (currentActive === 0) {
        preBtn.classList.remove('active');
    } else {
        preBtn.classList.add('active');
    }
    if (currentActive === points.length - 1) {
        nextBtn.classList.remove('active');
    } else {
        nextBtn.classList.add('active');
    }
}