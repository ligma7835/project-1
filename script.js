let textElement = document.getElementById("text")
let speedEl = document.getElementById("speed")
let text = 'Volim da programiram'
let testPosition = 1
let speed = 500 / speedEl.value

writeText()

function writeText() {
    textElement.innerHTML = text.slice(0, testPosition)
    testPosition ++
    if (testPosition > text.length) {
        testPosition = 1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener("input", (e) => {
    speed = 500 / e.target.value
})
