const RedRange = document.getElementById('redrange')
const GreenRange = document.getElementById('greenrange')
const BlueRange = document.getElementById('bluerange')
const DisplayBtn = document.getElementById('displaybtn')
const MainBox = document.getElementById('mainbox')

function RedR() {
    DisplayBtn.innerText = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
    document.body.style.backgroundColor = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
}

function GreenR() {
    DisplayBtn.innerText = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
    document.body.style.backgroundColor = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
}

function BlueR() {
    DisplayBtn.innerText = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
    document.body.style.backgroundColor = `rgb(${RedRange.value},${GreenRange.value},${BlueRange.value})`
}

RedRange.addEventListener('input', RedR)
GreenRange.addEventListener('input', GreenR)
BlueRange.addEventListener('input', BlueR)