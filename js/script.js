
let start = document.querySelector('.add-Random');
let buttonG = document.querySelectorAll('button.btn-dark');
let check = document.getElementById('check');
let reset = document.getElementById('reset');
let numDisplay = document.getElementById('num');
let result;
let maxNum = 100;
let max = document.getElementById('maxNum');
let minNum = 0;
let min = document.getElementById('minNum');

const startGame = () =>{
    start.disabled = true;
    start.setAttribute('style' ,"background-color:black");
    num.disabled = false;
    if(buttonG.length > 0){
        for(let i=0;i<buttonG.length;i++){
            buttonG[i].removeAttribute('disabled');
            buttonG[i].setAttribute('style' ,"background-color:blue");
        }
    }
    result = Math.floor(Math.random() * 101);
    alert('密碼已產生,開始遊戲');
}

const checkGame = () =>{
    _input = document.getElementById('num').value;
    if(_input == ""){
        alert('沒有輸入任何數字,請重新輸入...');
    }
    else if(isNaN(_input)){
        alert('請輸入整數數字...');
    }
    else if(_input <= minNum || _input >= maxNum){
        displayClear();
        alert('請輸入範圍數字');
    }

    else if(result>_input && _input < maxNum){
        document.getElementById('minNum').innerText = _input;
        minNum = parseInt(_input);
        displayClear();
        alert("繼續遊戲!");
    }

    else if(result<_input && _input > minNum){
        document.getElementById('maxNum').innerText = _input;
        maxNum = parseInt(_input);
        displayClear();
        alert("繼續遊戲!");
    }
    else if(_input == result){
        alert('恭喜終極密碼猜對了! 請你吃個糖~');
        resetInit();
    }

    
}

const resetInit = () =>{
    start.disabled = false;
    start.setAttribute('style' ,"background-color:#dc3545");
    num.disabled = true;
    if(buttonG.length > 0){
        for(let i=0;i<buttonG.length;i++){
            buttonG[i].setAttribute('disabled','true');
            buttonG[i].setAttribute('style' ,"background-color:#212529");
        }
    }
    displayClear();
    max.innerText = 100;
    min.innerText = 0;
}

const displayClear= () =>{
    numDisplay.value ='';
}

// Event
start.addEventListener('click' , startGame);
check.addEventListener('click' , checkGame);
document.querySelector('.button-Group').addEventListener('click' , function(e){
    let inputNum ='';
    inputNum = e.target.dataset.num;
    numDisplay.value += inputNum;
},true);
reset.addEventListener('click' , resetInit);
