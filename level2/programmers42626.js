class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(num) {
    this.heap.push(num);
    let idx = this.heap.length - 1;

    while (idx > 1) {
      let parent = Math.floor(idx / 2);
      if (this.heap[parent] <= this.heap[idx]) {
        break;
      }

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  pop() {
    if (this.heap.length <= 2) return this.heap.pop();

    let min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;

    while (true) {
      let leftIdx = idx * 2;
      let rightIdx = idx * 2 + 1;
      let smallest = idx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] < this.heap[smallest]
      ) {
        smallest = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[smallest]
      ) {
        smallest = rightIdx;
      }

      if (smallest === idx) {
        break;
      }
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];

      idx = smallest;
    }
    return min;
  }
}

function solution(scoville, K) {
  const mh = new MinHeap();
  let count = 0;
  for (let s of scoville) {
    mh.push(s);
  }

  while (mh.heap.length > 1 && mh.heap[1] < K) {
    const min1 = mh.pop();
    const min2 = mh.pop();

    mh.push(min1 + min2 * 2);
    count++;
  }
  return mh.heap[1] >= K ? count : -1;
}
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

// 우선순위 큐 처럼 직접 최대힙 최소힙을 구현해야하는 문제는 python으로 가자
const scovilles = [];
const ks = [];

scovilles.push([1, 2, 3, 9, 10, 12]);
ks.push(7);

for (let i = 0; i < scovilles.length; i++) {
  console.log(solution(scovilles[i], ks[i]));
}
