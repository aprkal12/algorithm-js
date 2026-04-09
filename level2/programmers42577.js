function solution(phone_book) {
  var answer = true;
  const map = new Map();

  for (const p of phone_book) {
    if (!map.get(p)) {
      map.set(p, 1);
    }
  }
  for (const p of phone_book) {
    for (let i = 0; i < p.length; i++) {
      if (map.has(p.slice(0, i))) {
        return false;
      }
    }
  }
  return answer;
}

const pb = [];

pb.push(["119", "97674223", "1195524421"]);
pb.push(["123", "456", "789"]);
pb.push(["12", "123", "1235", "567", "88"]);

for (const input of pb) {
  console.log(solution(input));
}
