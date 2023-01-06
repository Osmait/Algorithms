def twoSum(nums, target):
    d = {}
    for i, num in enumerate(nums):
        if target-num in d:
            return i, d[target-num]
        d[num] = i


print(twoSum([2, 5, 5, 11], 10))
