function permute(nums: number[]) {
  let result: any = [];
  if (nums.length === 1) {
    return [[...nums]];
  }
  for (let _ = 0; _ < nums.length; _++) {
    let n: any = nums.shift();
    let permutations: any = permute(nums);
    for (const perm of permutations) {
      perm.push(n);
    }
    result = [...result, ...permutations];
    nums.push(n);
  }
  return result;
}

console.log(permute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
