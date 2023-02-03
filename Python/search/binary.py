

def binary_search1(arr: list, low: int, hi: int, x: int):

    if hi >= low:
        mid = low + (hi - low) // 2

        if arr[mid] == x:
            return mid

        if arr[mid] > x:
            return binary_search1(arr, low, mid-1, x)

        return binary_search1(arr, mid + 1, hi, x)
    return -1


def binary_search2(arr: list, low: int, hi: int, x: int) -> int:
    mid = low + (hi - low)//2
    while arr[mid] != x:
        if hi <= low or hi < 0:
            return -1

        if arr[mid] > x:
            hi = mid - 1
        else:
            low = mid + 1
        mid = low + (hi - low)//2

    return mid


if __name__ == "__main__":

    arr = [2, 3, 4, 10, 40]
    result1 = binary_search1(arr, 0, len(arr)-1, 10)

    result2 = binary_search2(arr, 0, len(arr)-1, 10)

    print(result1)
    print(result2)
