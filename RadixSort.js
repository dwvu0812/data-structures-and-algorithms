const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      digitBuckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([123, 3, 355454, 54]));
