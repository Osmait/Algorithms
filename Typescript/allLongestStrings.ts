function solution(inputArray: string[]) {
  let n: number[] = [];
  let j: string[] = [];
  for (const i of inputArray) {
    n.push(i.length);
  }
  const m = Math.max(...n);

  for (const i of inputArray) {
    if (i.length === m) {
      j.push(i);
    }
  }
  return j;
}

console.log(solution(["abacaba", "abacab", "abac", "xxxxxx"]));
