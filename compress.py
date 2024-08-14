def compress(s):
  num = 0
  result = ''
  base = s[0]
  
  for c in s:
    if base == c:
      num += 1
    else:
      result += str(num) + base if num != 1 else base
      base = c
      num = 1


  result += str(num) + base if num != 1 else base

  return result
      
  