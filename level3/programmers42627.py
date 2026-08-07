import heapq as hq

def solution(jobs):
    answer = 0
    heap = []
    time = 0 
    times = []
    pt = 0

    sorted_jobs = sorted(jobs, key=lambda x:x[0])
    for job in sorted_jobs:
        [job[0], job[1]] = [job[1], job[0]]

    while len(sorted_jobs) > pt or len(heap) > 0:
        for i in range(pt, len(sorted_jobs)):
            if sorted_jobs[i][1] <= time:
                hq.heappush(heap, sorted_jobs[i])
                pt = i+1
            else:
                break
        if len(heap) < 1:
            hq.heappush(heap, sorted_jobs[pt])
            time = sorted_jobs[pt][1]
            pt = pt + 1
        else:
            cur_job = hq.heappop(heap)
            end_time = time + cur_job[0]
            times.append(end_time - cur_job[1])
            time = end_time
    answer = int(sum(times) / len(times))
            
    return answer


# 우선 순위
# 1. 소요시간 짧
# 2. 요청 시각 빠른
# 3. 작업 번호가 작은 순

jobs_list = []

jobs_list.append([[0, 3], [1, 9], [3, 5]])
jobs_list.append([[0, 3], [1, 9], [2, 6]])
jobs_list.append([[2, 6], [0, 3], [1, 9]])
jobs_list.append([[0, 5], [0, 1], [0, 2]])
jobs_list.append([[0, 4], [10, 2]])
jobs_list.append([[0, 7]])
jobs_list.append([[5, 3], [6, 2]])
jobs_list.append([[0, 3], [10, 2], [20, 4]])
jobs_list.append([[0, 10], [1, 1], [1, 2], [1, 3]])
jobs_list.append([[0, 3], [0, 3]])
jobs_list.append([[3, 2], [3, 4], [10, 1]])
jobs_list.append([[0, 1], [100, 1]])
jobs_list.append([[1, 5], [2, 3], [100, 2]])

for jobs in jobs_list:
    print(solution(jobs))
