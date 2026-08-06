import heapq as hq

def solution(jobs):
    answer = 0
    heap = []
    time = 0
    
    times = []
    start_job = 0

    job = jobs.pop(0)
    [job[0], job[1]] = [job[1], job[0]]
    hq.heappush(heap, jobs.pop(0))
    job = hq.heappop(heap)

    # 풀이 설계
    # 1. 일단 job들은 우선순위 규칙에 따라 소요시간이 짧은 순으로 heap에 저장 (같은 시간 작업에 대한 후순위 처리 고려해야함)
    # 2. 먼저 전부 힙에 넣을지? (우선 순위 규칙이 있어서 잡들 먼저 넣어도 될 것 같음) 아니면 처음 구현하던대로 count를 ms로 각 ms마다의 작업을 할지? <- 오답 추정
    # 3. 한 타임에 여러 job이 오면? 그래서 먼저 job들에 대한 힙을 완성해야할듯

    # while job is not None or len(heap) > 0:
    #     if len(jobs) > 0 and jobs[0][0] == time:
    #         next_job = jobs.pop(0)
    #         [next_job[0], next_job[1]] = [job[1], job[0]]
    #         hq.heappush(heap, next_job)
    #     if not job and len(heap) > 0:
    #         job = hq.heappop(heap)
    #         start_job = time
    #     if time == start_job + job[1]:
    #         times.append(start_job + job[1] - job[0])
    #         job = None
    #     time+=1

    # print(times)
    # answer = sum(times) / len(times)
            
    return answer


# 우선 순위
# 1. 소요시간 짧
# 2. 요청 시각 빠른
# 3. 작업 번호가 작은 순

jobs_list = []

jobs_list.append([[0, 3], [1, 9], [3, 5]])

for jobs in jobs_list:
    print(solution(jobs))
