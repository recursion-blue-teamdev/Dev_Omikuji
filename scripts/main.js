const config = {
  topPage: document.getElementById('top-page'),
  omikujiPage: document.getElementById('omikuji-page'),
};

function drawOmikuji() {
  let omikuji = new Omikuji();
  goToOmikujiPage(omikuji);
}

function displayNone(ele) {
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
}
  
function displayBlock(ele) {
    ele.classList.remove('d-none');
    ele.classList.add('d-block');
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function goToOmikujiPage(omikuji) {
    displayNone(config.topPage);
    displayBlock(config.omikujiPage);
    config.omikujiPage.append(createOmikujiPage(omikuji));
}
  
function backToTopPage() {
    displayNone(config.omikujiPage);
    displayBlock(config.topPage);
    config.omikujiPage.innerHTML = '';
}

function drawOmikuji(){
    let omikuji = new Omikuji();
    goToOmikujiPage(omikuji);
}








