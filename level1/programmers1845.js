function solution(nums) {
  // Set을 사용하여 중복을 제거하고 종류의 수만 파악
  const uniqueTypes = new Set(nums).size;
  const targetLen = nums.length / 2;

  // 두 값 중 더 작은 값을 반환
  return Math.min(uniqueTypes, targetLen);
}

const nums = [];

nums.push([3, 1, 2, 3]);
nums.push([3, 3, 3, 2, 2, 4]);
nums.push([3, 3, 3, 2, 2, 2]);

for (const input of nums) {
  console.log(solution(input));
}
