function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  const curb = [truck_weights.shift()];
  const times = [0];
  let time = 1;
  while (curb.length > 0) {
    const ti = times[0];
    if (time - ti >= bridge_length) {
      times.shift();
      curb.shift();
    }
    if (truck_weights[0] + curb.reduce((acc, cur) => acc + cur, 0) <= weight) {
      const truck = truck_weights.shift();
      curb.push(truck);
      times.push(time);
    }
    time++;
  }
  answer = time;

  return answer;
}

const blen = [];
const wei = [];
const twei = [];

blen.push(2);
blen.push(100);
blen.push(100);

wei.push(10);
wei.push(100);
wei.push(100);

twei.push([7, 4, 5, 6]);
twei.push([10]);
twei.push([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

for (let i = 0; i < blen.length; i++) {
  console.log(solution(blen[i], wei[i], twei[i]));
}
