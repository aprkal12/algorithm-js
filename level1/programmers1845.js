function solution(nums) {
  var answer = 0;
  const map = new Map();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const targetLen = Math.floor(nums.length / 2);
  const keyLen = map.size;
  if (targetLen < keyLen) {
    answer = targetLen;
  } else {
    answer = keyLen;
  }
  return answer;
}

const nums = [];

nums.push([3, 1, 2, 3]);
nums.push([3, 3, 3, 2, 2, 4]);
nums.push([3, 3, 3, 2, 2, 2]);

for (const input of nums) {
  console.log(solution(input));
}
