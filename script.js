// Display setting
let inputHTML = document.getElementById("input-phrase")
let outputHTML = document.getElementById("output-result")

// User Input
let userInputHTML = document.querySelectorAll("button")

for(let i=0;i<userInputHTML.length;i++) {
    userInputHTML[i].addEventListener("click", calculate)

    console.log(userInputHTML[i])
}

function calculate() {
    let inputText = this.innerText    //inputText = text of button

    if (inputText=="AC") {
        inputHTML.textContent = "";
        outputHTML.textContent = "";
    }
    else if (inputText=="DEL") {
        inputHTML.textContent = inputHTML.textContent.substring(0,inputHTML.textContent.length-1)
    }
    else if (inputText=="=") {
        let result = eval(inputHTML.textContent)
        document.getElementById("output-result").textContent = result
    }
    else {
        inputHTML.textContent += inputText
    }

    console.log(inputText)
}