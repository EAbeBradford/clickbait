const myButton = document.getElementById("click-me");
const myScore = document.getElementById("score");
let score = 0; 

myButton.addEventListener("click", () => {
    let randWidth = Math.floor(Math.random() * (window.innerWidth - myButton.offsetWidth))
    let randHeight = Math.floor(Math.random() * (window.innerHeight - myButton.offsetHeight))

    let horizontalPercent = (randWidth / window.innerWidth) * 100;
    let verticalPercent =( randHeight / window.innerHeight) * 100;
    
    myButton.style.left = horizontalPercent + "%";
    myButton.style.top = verticalPercent + "%";

    score ++;
    console.log(score)
    myScore.textContent = score;

    // myButton.style.transition = "all 1s ease-in-out"



})

const time = document.getElementById("time");
let seconds = 10;

let timer = setInterval(() => {
    seconds -= 0.1;
    const remainingSeconds = (seconds % 60).toFixed(1);
    time.textContent = `Time: ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    if (remainingSeconds <= 0.0) {

        clearInterval(timer);
        time.textContent = "Time: 00:00"

        myButton.style.display = "none";
    }
}, 100);