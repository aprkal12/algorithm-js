function solution(progresses, speeds) {
  var answer = [];

  let needDays = [];
  let days = 0;
  let count = 0;
  while (progresses.length > 0) {
    let n = progresses.shift();
    let s = speeds.shift();
    n += days * s;
    if (n < 100) {
      days += Math.ceil((100 - n) / s);
    }
    needDays.push(days);
  }
  answer = [1];
  for (let i = 1; i < needDays.length; i++) {
    if (needDays[i] === needDays[i - 1]) {
      answer[answer.length - 1]++;
    } else {
      answer.push(1);
    }
  }
  return answer;
}

const pros = [];
const spe = [];

pros.push([93, 30, 55]);
pros.push([95, 90, 99, 99, 80, 99]);
spe.push([1, 30, 5]);
spe.push([1, 1, 1, 1, 1, 1]);

for (let i = 0; i < pros.length; i++) {
  console.log(solution(pros[i], spe[i]));
}
