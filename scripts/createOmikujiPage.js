function createOmikujiPage(omikuji){
    const container = document.createElement('div');
    container.classList.add('p-3','box-width');

    const omikujiFrame = document.createElement('div');
    omikujiFrame.classList.add('bg-white','d-flex','justify-content-center','align-items-center','flex-column','my-2');
    var oFortune = "あなたの未来は"+omikuji.fortune;
    var oLuckyAction = "ラッキーな行動は"+omikuji.luckyAction;
    var oLuckyShortcut = "ラッキーショートカットは"+omikuji.luckyShortcut;
    var oLuckyReview = "ラッキーリビューは"+omikuji.luckyReview;
    omikujiFrame.innerHTML = `
    <div class="border border-danger px-3">
        <div class="pt-3">
            <h4 class="text-danger text-center yuji-syuku">ソフトウェア転職みくじ</h4>
        </div>
        <div class="text-center border-top  border-danger pt-3">
            <h2 class="text-danger text-center yuji-syuku">${omikuji.fortune}</h2>
            <img src="images/${omikuji.fileNameOfImage}" class="omikuji-img">
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
            <button id="re-draw-omikuji" type="button" class="btn btn-danger rounded-pill mb-2">もう一度おみくじを引く</button>
            <button onclick="location.href='https://twitter.com/share?ref_src=twsrc%5Etfw%0a&text=皆もやってみよう!%0a&url=https://github.com/recursion-blue-teamdev/Dev_Omikuji%0a&hashtags=Recursion'" type="button" class="btn btn-danger rounded-pill">Twitterでシェア</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </button>
        </div>
    </div>
    `;
    omikujiFrame.querySelector('#re-draw-omikuji').addEventListener('click', function(){backToTopPage();});

    container.append(omikujiFrame);

    return container;
}