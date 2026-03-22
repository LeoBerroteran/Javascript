let num1 = 10;
let num2 = 5;
let operador = "+";

if (operador === "+") {
    console.log("Resultado de la suma:", num1 + num2);
} 
else if (operador === "-") {
    console.log("Resultado de la resta:", num1 - num2);
} 
else if (operador === "*") {
    console.log("Resultado de la multiplicación:", num1 * num2);
} 
else if (operador === "/") {
    if (num2 !== 0) {
        console.log("Resultado de la división:", num1 / num2);
    } else {
        console.log("Error: No se puede dividir por cero.");
    }
} 
else {
    console.log("Operador no válido");
}