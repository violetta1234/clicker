// Переменная для кнопки
let btn = document.querySelector(".btn-img")
// Переменная для вывода очков
let scoreText = document.querySelector("h2")
// переменная для очков
let score = 0
// Переменная для звука
let sound = document.querySelector("#click")
// Переменная для кнопки автоклика
let autoClickBtn = document.querySelector("#autoclick")
// Кол-во автокликов
let autoClickCount = 0


// Загрузка кликов из хранилища
if(localStorage.getItem("score")){
    score = localStorage.getItem("score")
    scoreText.innerHTML = score
}

function click(){
    score++
    scoreText.innerHTML = score
    sound.play()

    // Сохранить клики
    localStorage.setItem("score", score)
}

btn.addEventListener("click", click)

function buyAutoClick(){
    if(score >= 1000){
        // Вычитаем score
        score = score - 1000
        scoreText.innerHTML = score
        localStorage.setItem("score", score)

        autoClickCount++
        localStorage.SetItem("autoClickCount", autoClickCount)
        // Делаем автоклик
        setInterval(function() {
            score++
            scoreText.innerHTML = score
            localStorage.setItem("score", score)
        }, 1000)
    }
}

autoClickBtn.addEventListener("click", buyAutoClick)
