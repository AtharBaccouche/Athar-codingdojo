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
    return list[0]+len(list)
    
print(first_plus_length([15,2,3,8]))




def values_grater_then_second(list):
    if len(list)<2:
        return False
    output=[]
    for i in range (0,len(list)):
        if list[i]>list[1]:
            output.append(list[i])
            print(len(output))
    return(output)
print(values_grater_then_second([15]))

def this_length_values(size, value):
    output=[]
    for i in range (0,size):
        output.append(value)
    return(output)
print(this_length_values(3,8))




