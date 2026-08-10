function solution(signals) {
  var answer = 0;
  let n = 0;
  let sigs = [];
  // 규칙 처음 빼고는 빨강 + 초록불 시간 합친 만큼 반복됨
  // arr[0] + n(arr[0]+arr[2])
  for (signal of signals) {
    n = n + signal[0] + signal[1] + signal[2];
  }
  for (signal of signals) {
  }
  console.log(n);
  return answer;
}

const params = [];

params.push([
  [
    [2, 1, 2],
    [5, 1, 1],
  ],
]); // 정답: 13
params.push([
  [
    [2, 3, 2],
    [3, 1, 3],
    [2, 1, 1],
  ],
]); // 정답: 11
params.push([
  [
    [3, 3, 3],
    [5, 4, 2],
    [2, 1, 2],
  ],
]); // 정답: 193
params.push([
  [
    [1, 1, 4],
    [2, 1, 3],
    [3, 1, 2],
    [4, 1, 1],
  ],
]); // 정답: -1

for (const [signals] of params) {
  console.log(solution(signals));
}
