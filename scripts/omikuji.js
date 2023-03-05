class Omikuji {
  constructor() {
    this.fortune = this.getFortune(getRandomNumber(20)); // string
    this.description = this.getDescription(this.fortune); // string
    this.fileNameOfImage = this.getFileNameOfImage(this.fortune); // string
    this.luckyAction = this.getLuckyAction(getRandomNumber(8)); // string
    this.luckyShortcut = this.getLuckyShortcut(getRandomNumber(5)); // string
    this.luckyReview = this.getLuckyReview(getRandomNumber(5)); // string
  }

  getFortune(number) {
    let fortune = '';
    if (number < 1) fortune = '独立';
    else if (number >= 1 && number < 2) fortune = '自社';
    else if (number >= 2 && number < 4) fortune = '複業';
    else if (number >= 4 && number < 6) fortune = '修行';
    else if (number >= 6 && number < 8) fortune = '受託';
    else if (number >= 8 && number < 10) fortune = '請負';
    else if (number >= 10 && number < 12) fortune = '起業';
    else if (number >= 12 && number < 14) fortune = '発掘';
    else if (number >= 14 && number < 16) fortune = '派遣';
    else if (number >= 16 && number < 18) fortune = '修学';
    else if (number >= 18 && number < 19) fortune = '個人';
    else fortune = '海外';
    return fortune;
  }

  getDescription(fortune) {
    let description = '';
    switch (fortune) {
      case '独立':
        description =
          'フリーランスエンジニアとして新たな一歩を踏み出す事になりそうです。エンジニアとしての仕事に加えスケジュール管理や契約交渉、確定申告などタスク盛りだくさんですがエキサイティングな日々が待っています。';
        break;
      case '自社':
        description =
          '好きなサービスを開発している自社開発企業に内定しました！Recursionで学んだことを活かしてエンジニア人生の好スタートを切れそうです。';
        break;
      case '複業':
        description =
          '楽しい複業ライフですがネコハラには注意！？二刀流で楽しく働く近未来が見えます。愛するペットが商売道具を寝床にしないよう注意しましょう。';
        break;
      case '修行':
        description =
          '実務未経験から短期インターンに参加できることに！インターンと自己学習とで大変実りのある日々になります。ライバルは昨日の自分だー！';
        break;
      case '受託':
        description =
          '大手受託開発企業に内定しました！銀行システムの開発、運用保守に携わる予定です。頑張れ！';
        break;
      case '請負':
        description =
          '請負契約エンジニアデビューする近未来が見えます！プレッシャーで初めはしんどいかもしれませんが、着実にステップアップしているでしょう！';
        break;
      case '起業':
        description =
          'Recursionで学んだ経験を活かして起業することになります。あなたの頭の中には事業構想ができているでしょう。';
        break;
      case '発掘':
        description =
          'Twitter経由でとある企業からエンジニアとしてスカウト！されるでしょう。地道な発信が実を結びました。おめでとうございます！';
        break;
      case '派遣':
        description =
          '技術派遣としてエンジニアとしての第一歩を踏み出す事になりそうです。クライアント業務や開発の基本など食らいつくように身につけていくでしょう。';
        break;
      case '修学':
        description =
          'Recursionがきっかけでさらに深くCSを学びたくなり、大学院へ入学することになりそうです。知識や技術を深め、数年後はエンジニアとして爆進しまくっているでしょう。';
        break;
      case '個人':
        description =
          '個人開発していたアプリが人々の需要を満たし、たくさんのユーザー様から好評を得ました。機能追加、バグ修正に邁進していそうです。';
        break;
      case '海外':
        description =
          '海外エンジニアデビューを果たします。Recursionでのチーム開発経験が功を奏して、希望の会社に入社することができました。おめでとうございます！';
        break;
    }

    return description;
  }

  getFileNameOfImage(fortune) {
    let fileNameOfImage = '';
    switch (fortune) {
      case '独立':
        fileNameOfImage = '01_dokuritu.png';
        break;
      case '自社':
        fileNameOfImage = '02_jisya.png';
        break;
      case '複業':
        fileNameOfImage = '03_fukugyo.png';
        break;
      case '修行':
        fileNameOfImage = '04_intern.png';
        break;
      case '受託':
        fileNameOfImage = '05_jutaku.png';
        break;
      case '請負':
        fileNameOfImage = '06_ukeoi.png';
        break;
      case '起業':
        fileNameOfImage = '07_kigyou.png';
        break;
      case '発掘':
        fileNameOfImage = '08_hakkutu.png';
        break;
      case '派遣':
        fileNameOfImage = '09_haken.png';
        break;
      case '修学':
        fileNameOfImage = '10_shugaku.png';
        break;
      case '個人':
        fileNameOfImage = '11_kojin.png';
        break;
      case '海外':
        fileNameOfImage = '12_kaigai.png';
        break;
    }

    return fileNameOfImage;
  }

  getLuckyAction(number) {
    let luckyAction = '';
    switch (number) {
      case 0:
        luckyAction = 'Qiita記事執筆';
        break;
      case 1:
        luckyAction = 'Recursion　Discord質問解答';
        break;
      case 2:
        luckyAction = 'Recursion自習室へ';
        break;
      case 3:
        luckyAction = '技術書の積読解消';
        break;
      case 4:
        luckyAction = 'Recursionの復習を徹底';
        break;
      case 5:
        luckyAction = 'LT発表会登壇';
        break;
      case 6:
        luckyAction = 'エンジニアコミュニティ運営に携わる';
        break;
      default:
        luckyAction = 'ChatGPTカスタマイズ';
        break;
    }

    return luckyAction;
  }

  getLuckyShortcut(number) {
    let luckyShortcut = '';
    switch (number) {
      case 0:
        luckyShortcut = 'Ctrl(Command) + Shift + L <br>→同単語一括選択';
        break;
      case 1:
        luckyShortcut = 'Ctrl(Command) + D <br>→同単語1つずつ選択';
        break;
      case 2:
        luckyShortcut = 'Ctrl(Command) + Shift + Enter <br>→上に行追加';
        break;
      case 3:
        luckyShortcut = 'Ctrl(Command) + Enter <br>→下に行追加';
        break;
      default:
        luckyShortcut = 'Ctrl(Command) + Home <br>→ファイル先頭に移動';
        break;
    }

    return luckyShortcut;
  }

  getLuckyReview(number) {
    let luckyReview = '';
    switch (number) {
      case 0:
        luckyReview = '末尾再帰';
        break;
      case 1:
        luckyReview = 'リスト';
        break;
      case 2:
        luckyReview = 'オブジェクト';
        break;
      case 3:
        luckyReview = 'Bootstrap';
        break;
      case 4:
        luckyReview = '16進数';
        break;
      case 5:
        luckyReview = '制御フロー';
        break;
      case 6:
        luckyReview = 'スタック';
        break;
      case 7:
        luckyReview = '計算量';
        break;
      case 8:
        luckyReview = 'フィボナッチ数列';
        break;
      case 9:
        luckyReview = '多次元配列';
        break;
      case 10:
        luckyReview = '連想配列';
        break;
      default:
        luckyReview = 'スコープ';
        break;
    }

    return luckyReview;
  }
}