class PrefixSum {
  prefix_sum: number[];
  constructor(array: number[]) {
    const len_array = array.length;
    this.prefix_sum = new Array(len_array);

    if (len_array > 0) {
      this.prefix_sum[0] = array[0];
    }
    for (let i = 1; i < len_array; i++) {
      this.prefix_sum[i] = this.prefix_sum[i - 1] + array[i];
    }
  }

  getSum(start: number, end: number) {
    if (start === 0) {
      return this.prefix_sum[end];
    }
    return this.prefix_sum[end] - this.prefix_sum[start - 1];
  }
}

const p = new PrefixSum([1, 2, 4]);
console.log(p.getSum(0, 2));
