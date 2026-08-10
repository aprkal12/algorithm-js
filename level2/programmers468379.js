function solution(m, n, h, w, drops) {
  var answer = [];

  let rains = [];
  let rank = 1;
  let max = 0;

  const arr = Array.from(Array(m), () => Array(n).fill(0));

  for (drop of drops) {
    arr[drop[0]][drop[1]] = [rank++, 1];
  }

  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(arr[i][j]);
    }
    console.log(row.join(" "));
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) {
        if (j > w - 1 && rains.length > 0) {
          if (arr[i][rains[0]][0] < arr[i][j][0]) {
            rains.shift();
          }
        }
        rains.push(j);
      }
    }
    console.log(rains);
    rains = [];
  }
  // console.log(rains);
  return answer;
}

const params = [];

params.push([
  4,
  5,
  2,
  2,
  [
    [0, 0],
    [3, 1],
    [1, 3],
    [2, 4],
    [1, 1],
    [2, 2],
    [2, 3],
    [0, 4],
  ],
]); // 정답: [2, 2]
params.push([
  3,
  3,
  1,
  1,
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
]); // 정답: [1, 1]
params.push([4, 6, 3, 4, [[1, 2]]]); // 정답: [0, 0]
params.push([
  4,
  6,
  1,
  2,
  [
    [0, 1],
    [0, 3],
    [0, 5],
    [1, 1],
    [1, 3],
    [1, 5],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 1],
    [3, 3],
    [3, 5],
  ],
]); // 정답: [3, 4]
params.push([
  2,
  2,
  2,
  2,
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
  ],
]); // 정답: [0, 0]
params.push([
  4,
  4,
  3,
  1,
  [
    [2, 0],
    [1, 3],
    [3, 2],
    [0, 1],
  ],
]); // 정답: [0, 2]

for (const [m, n, h, w, drops] of params) {
  console.log(solution(m, n, h, w, drops));
}
