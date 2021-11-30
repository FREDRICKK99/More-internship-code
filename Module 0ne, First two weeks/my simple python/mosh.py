# course ='Python for Beginners'
# print(course.replace('for', '4'))
# print(course.upper())
# print(course.find("y"))

# # IN OPERATORS
# print("Python" in course)

# # ARITHMETIC OPERATORS

# print(10 + 3)
# print(10 - 3)
# print(10 / 3)
# print(10 // 3)
# print(10 %3)
# print(10 * 3)
# print(10 ** 3)

# temperature = 5

# if temperature > 30:
#   print("It's a hot day")
#   print("Drink plenty of water")
# elif temperature > 20:
#   print("Its a nice day")
#   print("Done")
# elif temperature > 10 :
#   print("Its a bit cold")
# else:
#   print("Its cold")




#  weight = input("Weight: ")
#  input("(K)g or (L)bs: ")
#  if unit.upper() == "K":
#    converted = weight /0.45
#    print("Weight in Lbs : " + converted)
#   else:
#     converted = weight * 0.45  
#     print("Weight in Kgs: " + converted)


name = input("Please enter your name: ")
age = int(input("How old are you, {0} ?".format(name)))
print(age)

if age >= 18:
  print("You are old enough to vote")
  print("Please put an X in the box")

else:
  print("Please come back in {0} years". format(18- age))



