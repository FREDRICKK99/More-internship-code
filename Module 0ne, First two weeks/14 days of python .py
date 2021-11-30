# Day 0: Hello, World.
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')

# TODO: Write a line of code here that prints the contents of input_string to stdout.



print(input_string)

# Day 1: Data Types

# Declare second integer, double, and String variables.

# Read and save an integer, double, and String to your variables.
input_int =int(input())
input_double =float(input())
intput_string =str(input())
# Print the sum of both integer variables on a new line.
print(i + input_int)
# Print the sum of the double variables on a new line.
print(round(d + input_double,1))
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + intput_string)

# Day 2: Operators
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#

def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    tip = tip_percent/100 * meal_cost
    tax = tax_percent/100 * meal_cost
    total = round(meal_cost + tip + tax)
    print(total)

if __name__ == '__main__':
    meal_cost = float(input().strip())

    tip_percent = int(input().strip())

    tax_percent = int(input().strip())

    solve(meal_cost, tip_percent, tax_percent)


# Day 3: Intro to Conditional Statements
#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    N = int(input().strip())
    if N%2!= 0:
        print("Weird")
    else:
        if N>=2 and N<=5:
            print("Not Weird")
        elif N>=6 and N<=20:
            print("Weird")
        elif N>20:
            print("Not Weird")
 
        
# Day 4: Class vs. Instance
class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        if initialAge < 0:
            self.age = 0
            print("Age is not valid, setting age to 0.")
        else:
            self.age = initialAge
    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if self.age < 13:
            print("You are young.")
        elif self.age >= 13 and self.age < 18:
            print("You are a teenager.")
        else:
            print("You are old.")
    def yearPasses(self):
        # Increment the age of the person in here
        self.age += 1
        
# Day 5: Loops
#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    
    for i in range(1, 11, 1):
        # product= n x i
        print('{0} x {1} = {2}'.format(n , i , n*i))
        


# Day 6: Let's Review

# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())

for i in range (n):
    test_string = input()
    even_indexed_character = ''
    odd_indexed_character = ''
    
    for j in range(len(test_string)):
        if j%2 == 0:
            even_indexed_character += test_string[j]
        else:
            odd_indexed_character += test_string[j]
         
    print("{} {}".format(even_indexed_character,odd_indexed_character))
    
        
        
# Day 7: Arrays

#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    # print("{} {} {} {} {}".format(arr))
    # print(arr)
    
    # arr = [1, 2, 3, 4, 5];     
    # print("Original array: ");    
    # for i in range(0, len(arr)):    
    #     print(arr[i]),     
    # print("Array in reverse order: ");    
    #Loop through the array in reverse order    
    for i in range(len(arr)-1, -1, -1):     
        print(arr[i], end =" "),  

# Day 8: Dictionaries and Maps

# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys
n =int(sys.stdin.readline().strip())
phone_book = dict()
for i in range(n):
    entry = sys.stdin.readline().strip().split(' ')
    phone_book[entry[0]]=entry[1]

query = sys.stdin.readline().strip()
while query:
    phone_number = phone_book.get(query)
    if phone_number:
        print(query + '=' + phone_number )
    else:
        print('Not found')
    query = sys.stdin.readline().strip()
        
        
    
# Day 9: Recursion 3
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'factorial' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def factorial(n):
    # Write your code here
    if n <= 1:
        return 1
    else:
        return n*factorial(n-1)
   
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    result = factorial(n)

    fptr.write(str(result) + '\n')

    fptr.close()

# Day 10: Binary Numbers

#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    current_consecutives_1s = 0
    maximum_consecutive_1s = 0
    while n >0:
        remainder = n % 2
        if remainder ==1:
            current_consecutives_1s +=1
            if current_consecutives_1s > maximum_consecutive_1s:
                maximum_consecutive_1s = current_consecutives_1s
        else:
            current_consecutives_1s = 0
            
        n = n // 2
    print(maximum_consecutive_1s)
        
# Day 11: 2D Arrays

#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    def _get_hourglass_sum(matrix, row , col):
        sum = 0
        sum += matrix[row -1][col -1]
        sum += matrix[row -1][col]
        sum += matrix[row -1][col +1]
        sum += matrix[row][col]
        sum += matrix[row +1][col -1]
        sum += matrix[row +1][col]
        sum += matrix[row +1][col + 1]
        
        return sum
       

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
        
    max_hourglass_sum = -63
    for i in range (1,5):
        for j in range (1,5):
            current_hourglass_sum = _get_hourglass_sum(arr, i,j)
            if current_hourglass_sum > max_hourglass_sum:
                max_hourglass_sum = current_hourglass_sum
    print(max_hourglass_sum )
    
 
# Day 12: Inheritance



class Student(Person):
    #   Class Constructor
    #   
    #   Parameters:
    #   firstName - A string denoting the Person's first name.
    #   lastName - A string denoting the Person's last name.
    #   id - An integer denoting the Person's ID number.
    #   scores - An array of integers denoting the Person's test scores.
    #
    # Write your constructor here
    def __init__(self, firstName, lastName, idNumber, scores):
        Person.__init__(self, firstName, lastName , idNumber )
        self.scores = scores

    #   Function Name: calculate
    #   Return: A character denoting the grade.
    #
    # Write your function here
    def calculate(self):
        sum = 0
        for score in scores:
            sum += score
        average = sum /len(scores)
        if average < 40:
            return 'T'
        elif average <55:
            return 'D'
        elif average < 70:
            return 'P'
        elif average < 80:
            return 'A'
        elif average < 90:
            return 'E'
        else:
            return 'O'           



# Day 13: Abstract Classes



#Write MyBook class
class MyBook(Book):
    def __init__(self, title , author, price):
        Book.__init__(self, title , author)
        self.price = price
        
    def display(self):
        print('Title: ' + self.title)
        print('Author: ' + self.author)
        print('Price: ' + str(self.price))
    
    
# Day 14 scope

class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0
    

    # Add your code here
    
    def computeDifference(self):
        min_element = 101
        max_element = 0
        for element in  self.__elements:
            if element < min_element:
                min_element = element
            if element > max_element:
                max_element = element
                
        self.maximumDifference = max_element - min_element
            
        
        # x = 101
        # y = 0

        # for item in self.__elements:
        #     if item < x:
        #         x = item
        #     if item > y:
        #         y = item
            

    
        # self.maximumDifference = y - x 
  
    
# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)

            
        
            
        
    















