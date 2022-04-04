const seg = document.querySelector('#seconds')
const min = document.querySelector('#minutes')
const hor = document.querySelector('#hours')
const dias = document.querySelector('#days')
const nextform = document.querySelector('#year')
const spinLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const formYear = new Date().getFullYear() + 2
const nextYearTime = new Date(`August 19 ${formYear} 00:00:00`)

nextform.textContent = formYear

const timeUnit = unit => unit < 10 ? '0' + unit : unit
const inserirValues =({days, hours, minutes, seconds}) => {
    seg.textContent = timeUnit(seconds) 
    min.textContent = timeUnit(minutes) 
    hor.textContent = timeUnit(hours)
    dias.textContent = timeUnit(days) 

} 

function atualizaHora(){
    const today = new Date()
    const diference = nextYearTime - today
    const days = Math.floor(diference/1000/60/60/24)
    const hours = Math.floor(diference/1000/60/60)%24
    const minutes = Math.floor(diference/1000/60)%60
    const seconds = Math.floor(diference/1000)%60

    inserirValues({days, hours, minutes, seconds}) 
  
}

const removeAddstyle = ()=>{
    spinLoading.remove()
    countdownContainer.style.display = 'flex'
}
setTimeout(removeAddstyle, 1000)
setInterval(atualizaHora, 1000)



