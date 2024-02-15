def high_and_low(numbers):
    nums = [int(e) for e in numbers.split()]
    
    return f"{max(nums)} {min(nums)}"