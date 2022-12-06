const weightEl = document.getElementById("weight")
let weightP = document.getElementById("weightinput")
let heightP = document.getElementById("heightinput")
const heightEl = document.getElementById("height")
let scoreEl= document.getElementById("score")
let statusEl= document.getElementById("status")

function calculate() {
    let bmi = (weightEl.value / ((heightEl.value / 100) ** 2)).toFixed(1)
    weightP.textContent = weightEl.value + " kg"
    heightP.textContent = heightEl.value + " cm"
    scoreEl.textContent = bmi
    if (bmi < 18.50) {
        statusEl.textContent = "Stick (Underweight)"
        scoreEl.style.color = "red"
    } else if (bmi > 18.50 && bmi < 25.00) {
        statusEl.textContent = "Average / Healthy"
        scoreEl.style.color = "rgb(0, 255, 98)"
    } else if (bmi > 25.00 && bmi < 30.00) {
        statusEl.textContent = "Overweight"
        scoreEl.style.color = "rgb(226, 226, 98)"
    } else if (bmi > 29.99 && bmi < 35.00) {
        statusEl.textContent = "Discord Mod (Obese)"
        scoreEl.style.color = "orange"
    } else if(bmi > 35 && bmi < 101) {
        statusEl.textContent = "How u still alive? (Severely Obese)"
        scoreEl.style.color = "red"
    } else  {
        statusEl.textContent = "What the? (😳)"
        scoreEl.style.color = "rgba(247, 0, 0, 0.644)"
    }
}