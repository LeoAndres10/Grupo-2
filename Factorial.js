function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log('Factorial de 3:', factorial(3)); 
console.log('Factorial de 5:', factorial(5)); 


const numero = process.argv[2];
if (numero) {
    console.log(`Factorial de ${numero}:`, factorial(Number(numero)));
}