function solution(priorities, location) {
  var answer = 1;

  const list = priorities.map((v, idx) => {
    if (idx === location) {
      return { val: v, isTarget: true };
    } else {
      return { val: v, isTarget: false };
    }
  });
  while (list.length > 0) {
    const cur = list.shift();
    if (Math.max(cur.val, ...list.map((v) => v.val)) === cur.val) {
      if (cur.isTarget) {
        return answer;
      } else {
        answer++;
      }
    } else {
      list.push(cur);
    }
  }
  return answer;
}

const pri = [];
const loc = [];

pri.push([2, 1, 3, 2]);
pri.push([1, 1, 9, 1, 1, 1]);
loc.push(2);
loc.push(0);

for (let i = 0; i < pri.length; i++) {
  console.log(solution(pri[i], loc[i]));
}
