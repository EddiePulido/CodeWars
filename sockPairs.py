import sys
import math

n = int(input())
arr = input().split()

count = {}
c = 0

for num in arr:
    if num not in count:
        count[num] = 0

    count[num] += 1

for k in count:
    if count[k] > 1:
        c += count[k] // 2

print(c)