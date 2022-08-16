// Screen
let result = document.getElementById("result")

// Number
let button1 = document.getElementById("one")
let button2 = document.getElementById("two")
let button3 = document.getElementById("three")
let button4 = document.getElementById("four")
let button5 = document.getElementById("five")
let button6 = document.getElementById("six")
let button7 = document.getElementById("seven")
let button8 = document.getElementById("eight")
let button9 = document.getElementById("nine")

// Operation
let buttonReset = document.getElementById("reset")
let buttonLeftBracket = document.getElementById("(")
let buttonRightBracket = document.getElementById(")")
let buttonDivid = document.getElementById("divid")
let buttonMultiply = document.getElementById("multiply")
let buttonMinus = document.getElementById("minus")
let buttonPlus = document.getElementById("plus")
let buttonEqual = document.getElementById("equal")
let buttonCorrection = document.getElementById("correction")

// Functions 
button1.addEventListener("click",function(event){
    if (result.textContent=="VALUE"){
        result.innerHTML = 1
    } else{
        result.innerHTML += 1
    }
})
