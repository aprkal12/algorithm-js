function solution(array, commands) {
  var answer = [];

  for (i of commands) {
    const targetArr = array.slice(i[0] - 1, i[1]);
    const result = targetArr.sort((a, b) => a - b);
    answer.push(result[i[2] - 1]);
  }
  return answer;
}

const arr = [];
const cmd = [];

arr.push([1, 5, 2, 6, 3, 7, 4]);
cmd.push([
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
]);

for (let i = 0; i < arr.length; i++) {
  console.log(solution(arr[i], cmd[i]));
}
