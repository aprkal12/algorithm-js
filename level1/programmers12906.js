function solution(arr) {
  var answer = [];

  let top = -1;

  for (const el of arr) {
    if (answer[top] !== el) {
      answer.push(el);
      top += 1;
    }
  }

  return answer;
}

const input = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(input));
