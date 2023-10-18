//TODO - App View

const leftCol = document.getElementById('left-col');
const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', (e) => {
    leftCol.style.display = "block";
    rightCol.style.display = "none";
});