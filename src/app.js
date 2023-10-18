//TODO - App View

const leftCol = document.getElementById('left-col');
const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', (e) => {
    leftCol.style.display = "block";
    rightCol.style.display = "none";
});

const toggleLeftAndRightViewsOnMobile = () => {
    if (document.body.clientWidth <= 600) {
        leftCol.style.display = "none";
        rightCol.style.display = "block";
    }
}

//SECTION - Data

let contacts = [];