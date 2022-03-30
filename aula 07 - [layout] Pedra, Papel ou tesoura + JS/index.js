var $stoneButton1 = document.querySelector('.button-stone-player-1')
var $paperButton1 = document.querySelector('.button-paper-player-1')
var $scissorsButton1 = document.querySelector('.button-scissors-player-1')

var $stoneButton2 = document.querySelector('.button-stone-player-2')
var $paperButton2 = document.querySelector('.button-paper-player-2')
var $scissorsButton2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

$stoneButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/stone.png">'
})

$paperButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/paper.png">'
})

$scissorsButton1.addEventListener('click', function (){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/scissors.png">'
})

$stoneButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/stone.png">'
})

$paperButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/paper.png">'
})

$scissorsButton2.addEventListener('click', function (){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/scissors.png">'
})