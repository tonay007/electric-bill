document.querySelector("#username").addEventListener('keyup', process);

function process(){
    document.getElementById('uname').innerHTML = this.value;
}

document.querySelector("body").addEventListener('click', calculate);

function calculate(){
    let presentRdg = parseFloat(document.getElementById('prrdg').value);
    let pastRdg = parseFloat(document.getElementById('pardg').value);
    let unitPrize = parseFloat(document.getElementById('up').value);
    let bill = (presentRdg - pastRdg) * unitPrize;
    document.getElementById("nitbill").innerHTML = bill;
}