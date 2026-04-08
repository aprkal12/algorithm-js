function solution(participant, completion) {
  const m = new Map();

  for (const p of participant) {
    m.set(p, (m.get(p) || 0) + 1);
  }
  for (const c of completion) {
    m.set(c, m.get(c) - 1);
  }
  for (const [k, v] of m.entries()) {
    if (v > 0) {
      return k;
    }
  }
}

pa = [];
comp = [];

pa.push(["leo", "kiki", "eden"]);
comp.push(["eden", "kiki"]);

pa.push(["marina", "josipa", "nikola", "vinko", "filipa"]);
comp.push(["josipa", "filipa", "marina", "nikola"]);

pa.push(["mislav", "stanko", "mislav", "ana"]);
comp.push(["stanko", "ana", "mislav"]);

for (let i = 0; i < pa.length; i++) {
  console.log(solution(pa[i], comp[i]));
}
