
def twoSum( nums: list[int], target: int) -> list[int]:
        prevMap = {}  

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i


print(twoSum([4,7,11,15],11))