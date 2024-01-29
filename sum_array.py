def sum_array(arr):
    if not arr or len(arr) <= 1:
        return 0
    
    return sum(e for e in arr) - min(arr) - max(arr)