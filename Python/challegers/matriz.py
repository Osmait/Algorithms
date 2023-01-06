"""
   After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
    """


def solution(matrix):
    total = 0

    for j in range(0, len(matrix[0])):
        for i in range(0, len(matrix)):
            if (matrix[i][j] == 0):
                break
            else:
                total += matrix[i][j]

    return total


matrix = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
]
print(solution(matrix))
