function solution(s) {
  var answer = false;

  const word = [];

  for (let c of s) {
    if (c === "(") {
      word.push(c);
    } else if (c === ")" && word[word.length - 1] === "(") {
      word.pop();
    } else {
      return false;
    }
  }
  if (word.length === 0) {
    return true;
  }
  return answer;
}

const s = [];

s.push("()()");
s.push("(())()");
s.push(")()(");
s.push("(()(");
s.push("())");

for (let str of s) {
  console.log(solution(str));
}
