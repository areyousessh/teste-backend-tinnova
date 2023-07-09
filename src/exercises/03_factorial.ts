function calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i
    }

    return factorial
}

const number = 4;
const result = calculateFactorial(number);
console.log(`O fatorial de ${number} é: ${result}`)