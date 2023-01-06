function solution(matrix: number[][]) {
  let total = 0;
  console.log(matrix[0].length);
  console.log(matrix.length);

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        break;
      } else {
        total += matrix[i][j];
      }
    }
  }
  return total;
}
const matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

console.log(solution(matrix));
