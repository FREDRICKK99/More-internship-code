# Python If-Else


#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())

# if(n % 2==1):
#     print("Weird")
# else:
#     if(n >= 2 and n <= 5):
#         print("Not Weird") 
#     elif(n >=6 and n <= 20):
#         print("Not Weird")
#     elif(n > 20):
#         print("Not Weird")
    
if(n%2!=0) or (n>=6 and n<=20):
    print("Weird")
else:
    print("Not Weird")


    
# Say "Hello, World!" With Python 
print("Hello, World!")


# Arithmetic Operators
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    
    # a=3
    # b=2
    print(a+b)
    print(a-b)
    print(a*b)

           
            
# Python: Division
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b)
    print(a/b)

# Loops

if __name__ == '__main__':
    n = int(input())
    for i in range (0,n):
        print(i*i);
         


# Print Function
from __future__ import print_function

if __name__ == '__main__':
    n = int(raw_input())
    for i in range (1,n+1):
        print(i,end="");

# Write a function
def is_leap(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True       
    return False

# List Comprehensions
if __name__ == '__main__':
    x = int(raw_input())
    y = int(raw_input())
    z = int(raw_input())
    n = int(raw_input())
    l=list()
    for i in range(x+1):
        for j in range(y+1):
            for k in range(z+1):
                if(i+j+k!=n):
                    l.append([i,j,k])
    print(l)

# Find the Runner-Up Score!
if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    
    a=max(arr)
    
    c=arr.count(a)
    
    for i in range (c):
        arr.remove(a)
        
    print(max(arr))

# Nested Lists
if __name__ == '__main__':
    dic={}
    s=list()
    for _ in range(int(input())):
        name = input()
        score = float(input())
        if score in dic:
            dic[score].append(name)
        else:
            dic[score]=[name]
        if score not in s:
            s.append(score)        
            
    m=min(s)
    s.remove(m)
    n1=min(s)   
    dic[n1].sort()
    for i in dic[n1]:
        print(i)
    
