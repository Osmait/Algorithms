function isPalindrome(num: number): boolean {
  let temp = num;
  let rev = 0;

  while (num > 0) {
    let dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.round(num / 10);
    console.log(num);
  }
  return temp === rev;
}

console.log(isPalindrome(121));
