const quiz =[
{
    question:'ケイミーは何の人魚？',
    answers:[
        'トビウオ',
        'グッピー',
        'キッシンググーラミー'
    ],
    correct:'キッシンググーラミー'
},{
    question:'フーシャ村の村長の名前は？',
    answers:[
        'ウープスラップ',
        'モーニン',
        'フーシャ'
    ],
    correct:'ウープスラップ'
},{
    question:'フルボディがサンジのスープに入れた虫の名前は？',
    answers:[
        'ハエ',
        'バッチー',
        'ハッチー'
    ],
    correct:'バッチー'
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuize = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuize();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){
        window.alert('せいかいー！');
        score++;
        }else{
        window.alert('もっと勉強したら？？');                                           }
    
    quizIndex++;
    if(quizIndex < quizLength){ 
        setupQuize();
    }else{
        window.alert('おわりー！あなたの正解数は'+ score + '/' + quizIndex + 'です！！');
    }


};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {        
    clickHandler(e);
    });
    handlerIndex++;
}


