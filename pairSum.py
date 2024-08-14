def pair_sum(numbers, target_sum):
  pairs = {}

  for i in range(0,len(numbers)):
    num = numbers[i]
    pair = target_sum - num

    if num in pairs:
      return (pairs[num], i)

    pairs[pair] = i
