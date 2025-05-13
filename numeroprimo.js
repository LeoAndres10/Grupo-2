function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  // Ejemplo de uso
  const numero = 17;
  console.log(`¿El número ${numero} es primo?`, esPrimo(numero));
  
