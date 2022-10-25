# 1. Basic - Print all integers from 0 to 150.
for x in range(0,151):
    print(x)
# 2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for x in range(0,1001):
    if x % 5==0 :
        print(x)
# 3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for x in range(0,101):
    if x % 10==0:
        print("Coding Dojo")
    elif x % 5==0 and x % 10!=0:
        print("Coding ")
    else:
        print(x)
# 4.Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum 
sum=0
for x in range(0,500001):
    if x % 2 !=0:
        sum=sum+x
print(sum)
#5
for x in range(2018,0,-4):
    print(x)
#6
lowNum=2
highNum=9
mult=3
for x in range(lowNum,highNum+1):
    if x % mult == 0:
        print(x)
    