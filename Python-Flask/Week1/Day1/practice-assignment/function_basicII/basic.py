def countdown(num):
    output = []
    for x in range(num,-1,-1):
        output.append(x)
    return output

print(countdown(5))

def print_and_return(list):
    print(list[0])
    return list[1]
print( print_and_return([65,25]))

def first_plus_length(list):
    sum=list[0]+len(list)
sum=first_plus_length([15,2,3,8])

