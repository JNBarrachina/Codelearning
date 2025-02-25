const execSum = document.getElementById("sBut");
execSum.addEventListener("click", executeSum);
const resultP = document.getElementById("rp");

function executeSum(){
    execSum.innerText = "Espere, por favor...";
    execSum.setAttribute('disabled', '');
    
    for (i=1; i<=3; i++){
        const cleanP = document.getElementById("np"+i);
        cleanP.innerText = ""
        resultP.innerText = "Insertando número 1.";
    }

    const num1 = new Promise((resolve) => {
        setTimeout(() => {
            let n1 = Math.floor(Math.random() * 10);
            document.getElementById("np1").innerText = n1;
            resultP.innerText = "Insertando número 2..";
            resolve(n1);
        }, 1000);
    });

    const num2 = new Promise((resolve) => {
        setTimeout(() => {
            let n2 = Math.floor(Math.random() * 10);
            document.getElementById("np2").innerText = n2;
            resultP.innerText = "Insertando número 3...";
            resolve(n2);
        }, 3000);
    });

    const num3 = new Promise((resolve) => {
        setTimeout(() => {
            let n3 = Math.floor(Math.random() * 10);
            document.getElementById("np3").innerText = n3;
            resultP.innerText = "Operando....";
            resolve(n3);
        }, 5000);
    });

    Promise.all([num1, num2, num3]).then((values) => {
        const sum = values.reduce((total, current) => total + current, 0);
        setTimeout(() => {
            execSum.removeAttribute('disabled');
            execSum.innerText = "Realiza otra suma"
            resultP.innerText = sum;
        }, 2000);
    });
}
