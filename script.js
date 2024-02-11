const appendToDisplay = (value) => {
    document.getElementById('display').value += value;
}
const calculate = () => {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
const appendToClear = () => {
    document.getElementById('display').value = "";
}
const squart = () => {
    let value = document.getElementById('display').value;
    if (!isNaN(value) && (value > 0)) {
        document.getElementById('display').value = Math.sqrt(value);
    }
}
const power = () => {
    let value = document.getElementById('display').value;
    if(!isNaN(value)) {
       document.getElementById('display').value = Math.pow(value, 2);
    }
}
const logarithme = () => {
    let value = document.getElementById('display').value;
    if(!isNaN(value) && (value > 0)) {
        document.getElementById('display').value = Math.log10(value);
    }else {
        document.getElementById('display').value = "Error";
    }
}