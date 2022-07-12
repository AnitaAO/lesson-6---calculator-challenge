let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumParagraph = document.getElementById("sum-el")


//create four functions: add(), subtract(), divide(), multiply()
//call the correct function when the user clicks on one of the buttons
//perform the given calculation using num1 and num2
//render the result of the calculation in the paragraph with id="sum-el"
function add(){
    console.log(num1 + num2)
    sumParagraph.textContent = "Sum: 10" + " " + "(since 8 + 2 = 10)"

}

function subtract(){
    console.log(num1 - num2)
    sumParagraph.textContent = "Sum: 6" + " " + "(since 8 - 2 = 6)"
    
}

function divide(){
    console.log(num1 / num2)
    sumParagraph.textContent = "Sum: 4" + " " + "(since 8 / 2 = 4)"
    
}

function multiply(){
    console.log(num1 * num2)
    sumParagraph.textContent = "Sum: 16" + " " + "(since 8 * 2 = 16)"
    
}

//another route
//let sumEl = document.getElementById("sum-el")
//let result = num1 + num2
//in each functions, sumEl.textContent + result
//note that result would have to be assigned the right operators in each function

