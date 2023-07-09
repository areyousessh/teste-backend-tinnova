function bubbleSort(v: number[]): number[] {
    const length = v.length;;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (v[j] > v[j + 1]) {
            // Troca os elementos de posição
            const temp = v[j];
            v[j] = v[j + 1];
            v[j + 1] = temp;
          }
        }
      }
  
    return v;
}

const v = [5, 3, 2, 4, 7, 1, 0, 6];
console.log("Vetor antes da ordenação", v)

const orderedV = bubbleSort(v);
console.log("Vetor ordenado", orderedV)