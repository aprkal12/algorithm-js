function solution(genres, plays) {
  var answer = [];

  const songMap = new Map();
  const genRank = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (!songMap.has(genres[i])) {
      songMap.set(genres[i], new Map());
    }
    songMap.get(genres[i]).set(i, plays[i]);
  }
  const sortedPlayes = new Map();
  for (const [k, v] of songMap.entries()) {
    const playsScore = [...v.values()];
    const sum = playsScore.reduce((acc, cur) => acc + cur, 0);
    genRank.set(k, sum);

    let genPlayArr = [...v];
    genPlayArr.sort((a, b) => {
      const playsA = a[1];
      const playsB = b[1];

      // 재생 횟수가 같으면 인덱스 순 오름차순 정렬
      if (playsA === playsB) {
        return a[0] - b[0];
      }

      return playsB - playsA;
    });
    let genPlayMap = new Map(genPlayArr);
    sortedPlayes.set(k, genPlayMap);
  }
  let genRankArr = [...genRank];
  genRankArr.sort((a, b) => {
    const pa = a[1];
    const pb = b[1];

    // 모든 장르는 재생된 횟수가 다름
    return pb - pa;
  });
  const genRankMap = new Map(genRankArr);

  for (const k of genRankMap.keys()) {
    let keys = sortedPlayes.get(k).keys();
    const keysArr = [...keys];
    const top2 = keysArr.slice(0, 2);
    answer.push(...top2);
  }
  return answer;
}

const gens = [];
const plays = [];

gens.push(["classic", "pop", "classic", "classic", "pop"]);
plays.push([500, 600, 150, 800, 2500]);

for (let i = 0; i < gens.length; i++) {
  console.log(solution(gens[i], plays[i]));
}
