function solution(clothes) {
  const map = new Map();

  for (const cloth of clothes) {
    const type = cloth[1];
    map.set(type, (map.get(type) || 0) + 1);
  }

  let answer = 1;

  // 각 종류별 옷의 개수 + 안 입는 경우 1 곱하기
  for (const count of map.values()) {
    answer *= count + 1;
  }

  // 아무것도 안입은 경우 빼기
  return answer - 1;
}

const clothes = [];

clothes.push([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

clothes.push([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]);

clothes.push([
  // 답 17
  ["glasses", "eyewear"],
  ["sunglasses", "eyewear"],
  ["hat", "headgear"],
  ["coat", "outerwear"],
  ["jacket", "outerwear"],
]);

clothes.push([
  // 답 15
  ["red_sunglasses", "eyewear"],
  ["white_tshirt", "top"],
  ["black_jeans", "bottom"],
  ["leather_boots", "shoes"],
]);

for (const input of clothes) {
  console.log(solution(input));
}
