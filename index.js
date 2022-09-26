const adviceNumber = document.getElementById('advice-num')
const adviceDisplay = document.getElementById('advice')
const adviceBtn = document.getElementById('random-advice')



function getAdvice(){
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceNumber.textContent = `Advice: #${data.slip.id}`
        adviceDisplay.textContent = `"${data.slip.advice}"`
    }) 
}

getAdvice()

adviceBtn.addEventListener('click', () => {
    getAdvice()
})