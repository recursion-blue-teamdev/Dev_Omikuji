const config = {
  topPage: document.getElementById('top-page'),
  omikujiPage: document.getElementById('omikuji-page'),
  popup: document.getElementById('popup')
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

// 2秒間おみくじの箱画像を表示させる
var timerId;
function popupOmikujiBox(){
    displayBlock(config.popup);
    timerId = setTimeout( closeBox , 2000 );
}

// おみくじの箱画像を非表示にする
function closeBox(){
    clearTimeout( timerId );
    displayNone(config.popup);
    drawOmikuji()
}








