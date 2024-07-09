def most_frequent_char(s):
  count = {}

  for c in s:
    if c not in count:
      count[c] = 0

    count[c] += 1

    max = 0
    char = ''

  for key in count:
    if max < count[key]:
      max = count[key]
      char = key


  return char