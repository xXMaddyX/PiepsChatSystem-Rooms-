const menuBtn = document.querySelector(".menu-button button");
const mobiMenu = document.querySelector(".liste");



menuBtn.onclick = () => {
    mobiMenu.classList.add('active');
}

function closeMobiMenu(any) {
    if (!mobiMenu.contains(any.target) && !menuBtn.contains(any.target)) {
        mobiMenu.classList.remove('active');
    }
}
document.addEventListener('click', closeMobiMenu);


function navigateTo(url) {
    window.location.href = url;
}

function navigateToBlank(url) {
    window.open(url, '_blank');
}