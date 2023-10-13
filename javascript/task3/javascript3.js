// var num1 = document.getElementById('first').value;
// var num2 = document.getElementById('second').value;

function multiply(){
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;
    let resultDiv = document.getElementById('resultDiv');
    var result;
    result = num1*num2;
    resultDiv.innerHTML = "The Result Is: " + result;
}

function divide(){
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;
    let resultDiv = document.getElementById('resultDiv');
    var result;
    result = num1/num2;
    resultDiv.innerHTML = "The Result Is: " + result;
}
