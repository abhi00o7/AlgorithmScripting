import math
 
def sieve_of_Sundaram(n):
    """The sieve of Sundaram is a simple deterministic algorithm for finding all the prime numbers up to a specified integer."""
    if n < 3:
        if n < 2: return 0
        else: return 1    
    k = (n - 3) // 2 + 1; integers_list = [True] * k; ops = 0
    for i in range(0, (int(math.sqrt(n)) - 3) // 2 + 1):
#        if integers_list[i]: # adding this condition turns it into a SoE!  
            p = 2 * i + 3; s = (p * p - 3) // 2 # compute cull start
            for j in range(s, k, p): integers_list[j] = False; ops += 1
    print("Total operations:  ", ops, ";", sep='')
    count = 1
    for i in range(0, k):
        if integers_list[i]: count += 1
    print("Found ", count, " primes to ", n, ".", sep='')

print(sieve_of_Sundaram(100))