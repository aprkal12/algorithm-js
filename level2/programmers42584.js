function solution(prices) {
  var answer = [];

  let idx = 0;
  let i = 0;
  while (idx < prices.length) {
    if (i === prices.length) {
      answer.push(i - idx - 1);
      i = idx + 1;
      idx++;
    } else if (prices[idx] > prices[i]) {
      answer.push(i - idx);
      i = idx + 1;
      idx++;
    } else {
      i++;
    }
  }
  return answer;
}

const prices = [];

prices.push([1, 2, 3, 2, 3]);
prices.push([3, 4, 1, 2]);
prices.push([2, 3, 2, 1]); // 답 [3, 1, 1, 0]
prices.push([5, 2, 6, 3, 1]); // 답 [1, 3, 1, 1, 0]

for (let p of prices) {
  console.log(solution(p));
}
