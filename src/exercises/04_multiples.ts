function sumThreeAndFiveMultiples(n: number): number {
    let soma = 0;
    
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
    
    return soma;
  }
  
  const n = 78;
  const results = sumThreeAndFiveMultiples(n);
  console.log(`A soma dos múltiplos de 3 e 5 menores que ${n} é: ${results}`);