
def iterative_factorial(n):
    fact = 1
    for i in range(2,n+1):
        fact *=i
    return fact

def recur_factorial(n):
    if n ==1:
        return n
    
    return  recur_factorial(n-1)* n
     
     







if __name__ == "__main__":
    print(iterative_factorial(5))
    print(recur_factorial(5))
