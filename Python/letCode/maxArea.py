def max_area(height: list[int])->int:
    l,r = len(height) -1
    res = 0

    while l < r:
        res = max(res, min(height[l],height[r] * (r - l)))
        if height[l] < height[r]:
            l +=1
        elif height[r] <= height[l]:
            r -=1
        return res