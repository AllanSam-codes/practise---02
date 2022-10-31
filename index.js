var txtInput = document.querySelector("#input-txt")
var incrBtn = document.querySelector("#increase")
var dcrBtn = document.querySelector("#decrease")

var textSize = 15

function incrFontSizeBy2px() {
    textSize = textSize + 2
    txtInput.style.fontSize = `${textSize}px `
}

incrBtn.addEventListener('click', incrFontSizeBy2px)


function decrFontSizeBy2px() {
    textSize = textSize - 2
    txtInput.style.fontSize = `${textSize}px `
}

dcrBtn.addEventListener('click', decrFontSizeBy2px)