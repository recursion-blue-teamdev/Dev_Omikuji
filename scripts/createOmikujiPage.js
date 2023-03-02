function createOmikujiPage(omikuji){
    const container = document.createElement('div');
    container.classList.add('p-3');

    const omikujiFrame = document.createElement('div');
    omikujiFrame.classList.add('bg-white','d-flex','justify-content-center','align-items-center','flex-column','my-2');

    omikujiFrame.innerHTML = `
    <div class="border border-danger ">
        <div class="pt-3">
            <h4 class="text-danger text-center yuji-syuku">おみくじ</h4>
        </div>
        <div class="border-top border-bottom border-danger pt-3">
            <img src="images/${omikuji.fileNameOfImage}">
            <h5 class="text-danger text-center yuji-syuku">${omikuji.fortune}</h5>
        </div>
        <div class="border-top border-bottom border-danger pt-3">
            <p class="text-danger text-center yuji-syuku">${omikuji.description}</p>
        </div>
        <div class="border-top border-bottom border-danger pt-3">
            <p class="text-danger text-center yuji-syuku">ラッキーな行動</p>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyAction}</h5>
        </div>
        <div class="border-top border-bottom border-danger pt-3">
            <p class="text-danger text-center yuji-syuku">ラッキーショートカット</p>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyShortcut}</h5>
        </div>
        <div class="border-top border-bottom border-danger pt-3">
            <p class="text-danger text-center yuji-syuku">ラッキーリビュー</p>
            <h5 class="text-danger text-center yuji-syuku">${omikuji.luckyReview}</h5>
        </div>
        <div class="py-3 text-center align-items-center">
            <button id="re-draw-omikuji" type="button" class="btn btn-danger rounded yuji-syuku">もう一度おみくじを引く</button>
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