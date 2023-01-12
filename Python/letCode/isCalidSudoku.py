import collections


def isValidSudoku(boar:list[list[str]])->bool:
    cols = collections.defaultdict(set)
    rows = collections.defaultdict(set)
    squares = collections.defaultdict(set) #key = (r/3,c/3)

    for r in range(9):
        for c in range(9):
            if boar[r][c] ==".":
                continue
            if (
                boar[r][c] in rows[r]
                or boar[r][c] in cols[c]
                or boar[r][c]in squares [(r // 3 , c // 3)]
            ):
                return False
            cols[c].add(boar[r][c])
            rows[r].add(boar[r][c])
            squares[(r // 3 , c // 3)].add(boar[r][c])
    return True




print(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
