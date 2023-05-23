
let individualWeight, individualHeight, resultDisplay;
individualWeight = document.getElementById("mainWeight");
console.log(individualWeight);
individualHeight = document.getElementById("mainHeight");
console.log(individualHeight);
buttonAction = document.querySelector(".btnCalculate");
console.log(buttonAction);
// let rowDisplay = individualWeight/((individualHeight/100)**2)
resultDisplay = document.querySelector(".showResult");
console.log(resultDisplay);
buttonAction.addEventListener("click", function calculateData() {
    let messageToIndividual = document.querySelector(".resultOutput")
    let rowDisplay = individualWeight.value / ((individualHeight.value/100)**2);
    console.log(individualWeight.value);
    console.log(individualHeight.value);
    let dataAll = individualHeight.value;
    console.log(dataAll)
    resultDisplay.value = rowDisplay.toFixed(2);
    if (rowDisplay <=18.4) {
        messageToIndividual.innerText = "You are underweight 😟"
        messageToIndividual.style.color = "#fff"
        messageToIndividual.style.backgroundColor = "orange"
    }else if (rowDisplay >18.5 && rowDisplay <=24.9) {
        messageToIndividual.innerText = "You are normal ✔"
        messageToIndividual.style.backgroundColor = "green"
        messageToIndividual.style.color = "#fff"
    }else if (rowDisplay > 25.0 && rowDisplay <=39.9) {
        messageToIndividual.innerText = "You are overweight 😢"
        messageToIndividual.style.backgroundColor = "orange"
    }
    else{
        messageToIndividual.innerText = "You are obesed ✖ please run to your doctor"
        messageToIndividual.style.backgroundColor = "red"
        messageToIndividual.style.color = "#fff"
    }

})