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
  
function createOmikujiPage(omikuji){
    const container = document.createElement('div');
    container.classList.add('p-3','box-width');

    const omikujiFrame = document.createElement('div');
    omikujiFrame.classList.add('bg-white','d-flex','justify-content-center','align-items-center','flex-column','my-2');

    omikujiFrame.innerHTML = `
    <div class="border border-danger ">
        <div class="pt-3">
            <h4 class="text-danger text-center yuji-syuku">ソフトウェア転職みくじ</h4>
        </div>
        <div class="text-center border-top  border-danger pt-3">
            <img src="images/${omikuji.fileNameOfImage}" class="omikuji-img">
            <h3 class="text-danger text-center yuji-syuku">${omikuji.fortune}</h3>
        </div>
        <div class="border-top  border-danger pt-3">
            <h5 class="text-danger text-center yuji-syuku">${omikuji.description}</h5>
        </div>
        <div class="border-top  border-danger pt-3">
            <h3 class="text-danger text-center yuji-syuku">ラッキーな行動</h3>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyAction}</h5>
        </div>
        <div class="border-top  border-danger pt-3">
            <h3 class="text-danger text-center yuji-syuku">ラッキーショートカット</h3>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyShortcut}</h5>
        </div>
        <div class="border-top  border-danger pt-3">
            <h3 class="text-danger text-center yuji-syuku">ラッキーリビュー</h3>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyReview}</h5>
        </div>
        <div class="border-top border-danger text-center align-items-center py-3">
            <button id="re-draw-omikuji" type="button" class="btn rounded yuji-syuku">もう一度おみくじを引く</button>
            <button onclick=”location.href=’https://twitter.com/share?ref_src=twsrc%5Etfw’” class="twitter-share-button" data-show-count="false">Twitterでシェア</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </button>
        </div>
    </div>
    `;
    omikujiFrame.querySelector('#re-draw-omikuji').addEventListener('click', function(){backToTopPage();});

    container.append(omikujiFrame);

    return container;
}








