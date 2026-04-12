function solution(bridge_length, weight, truck_weights) {
  const startTruck = truck_weights.shift();
  const curb = [startTruck];
  const times = [0];
  let time = 1;
  let curWeight = startTruck;
  let truckIdx = 0;
  while (curb.length > 0) {
    const ti = times[0];
    if (time - ti >= bridge_length) {
      const passedTruck = curb.shift();
      times.shift();
      curWeight -= passedTruck;
    }
    if (
      truck_weights.length > truckIdx &&
      truck_weights[truckIdx] + curWeight <= weight
    ) {
      const truck = truck_weights[truckIdx];
      curb.push(truck);
      times.push(time);
      curWeight += truck;
      truckIdx++;
    }
    time++;
  }
  return time;
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
