def containsDuplicate( nums: list[int]) -> bool:
    not_dupli = set()
    for i in nums:
        if i  in not_dupli:
            return True
        not_dupli.add(i)
    
    return False







            
