def solution(inputArray):

    n_array = [i for i in inputArray if len(
        i) == len(max(inputArray, key=len))]

    return n_array


print(solution(["abacaba",
                "abacab",
                "abac",
                "xxxxxx"]))
