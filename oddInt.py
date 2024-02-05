def find_it(seq):
    dict = {}
    
    for c in seq:
        dict[c] = dict[c] + 1 if c in dict else 1
        
    for k in dict:
        if dict[k] % 2 == 1:
            return k
